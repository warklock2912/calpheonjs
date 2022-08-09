import { Result } from "./interfaces";
export declare type EntityTypes = ('unknown' | 'recipe' | 'npc_drop' | 'node' | 'item' | 'npc' | 'quest' | 'exp');
export declare type QueryFn<T = any> = <T>() => Promise<Result<T>>;
