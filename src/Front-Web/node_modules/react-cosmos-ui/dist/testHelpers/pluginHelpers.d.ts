import { PlugComponentType, PluginEventHandlers, PluginMethodHandlers, PluginSpec, PluginWithEvents, PluginWithMethods } from 'react-plugin';
export declare function getMethodsOf<Spec extends PluginSpec>(pluginName: Spec['name']): Spec["methods"] extends import("ui-plugin/dist/types/PluginSpec").PluginMethods ? Spec["methods"] : never;
export declare function on<Spec extends PluginWithEvents>(pluginName: Spec['name'], handlers: PluginEventHandlers<any, Spec>): void;
export declare function mockMethodsOf<Spec extends PluginWithMethods>(pluginName: Spec['name'], methods: PluginMethodHandlers<Spec>): void;
export declare function mockPlug<SlotProps extends {} = {}>(slotName: string, component: PlugComponentType<any, any>): void;
