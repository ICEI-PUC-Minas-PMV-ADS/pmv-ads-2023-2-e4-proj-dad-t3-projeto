import { PlaygroundMountArgs } from './playgroundConfig.js';
import './plugins/pluginEntry.js';
declare global {
    interface Window {
        ReactPlugin: any;
        React: any;
        ReactDom: any;
        StyledComponents: any;
    }
}
export default function mount({ playgroundConfig, pluginConfigs, }: PlaygroundMountArgs): Promise<void>;
