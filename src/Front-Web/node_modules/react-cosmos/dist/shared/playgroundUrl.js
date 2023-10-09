export function getPlaygroundUrl(cosmosConfig) {
    const { hostname, port, https: httpsEnabled } = cosmosConfig;
    const protocol = httpsEnabled ? 'https' : 'http';
    const hostnameDisplay = hostname || 'localhost';
    return `${protocol}://${hostnameDisplay}:${port}`;
}
