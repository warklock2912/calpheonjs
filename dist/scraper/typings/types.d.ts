import { Result } from "./interfaces";
export declare type ScrapeFn<T = any> = <T>() => Promise<Result<T>>;
export declare type Stat = number | [number, number];
