import { SetSelectValue, UseSelectArgs } from './shared.js';
export declare function useSelect<Option extends string>(selectName: string, args: UseSelectArgs<Option>): [Option, SetSelectValue<Option>];
