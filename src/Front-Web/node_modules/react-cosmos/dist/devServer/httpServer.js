import fs from 'fs';
import http from 'http';
import https from 'https';
import pem from 'pem';
import { getPlaygroundUrl } from '../shared/playgroundUrl.js';
export async function createHttpServer(cosmosConfig, requestListener) {
    const { port, hostname, https: httpsEnabled } = cosmosConfig;
    const server = httpsEnabled
        ? https.createServer(await getHttpsOpts(cosmosConfig), requestListener)
        : http.createServer(requestListener);
    async function start() {
        await new Promise(resolve => {
            if (hostname === null) {
                server.listen(port, resolve);
            }
            else {
                server.listen(port, hostname, resolve);
            }
        });
        console.log(`[Cosmos] See you at ${getPlaygroundUrl(cosmosConfig)}`);
    }
    async function stop() {
        await new Promise(resolve => server.close(resolve));
    }
    return { server, start, stop };
}
async function getHttpsOpts(cosmosConfig) {
    const { httpsOptions } = cosmosConfig;
    if (httpsOptions)
        return {
            key: fs.readFileSync(httpsOptions.keyPath, 'utf8'),
            cert: fs.readFileSync(httpsOptions.certPath, 'utf8'),
        };
    console.log('[Cosmos] Generating HTTPS certificate');
    return await new Promise((resolve, reject) => {
        pem.createCertificate({ days: 1000, selfSigned: true }, (err, keys) => {
            if (err)
                return reject(err);
            return resolve({ key: keys.serviceKey, cert: keys.certificate });
        });
    });
}
