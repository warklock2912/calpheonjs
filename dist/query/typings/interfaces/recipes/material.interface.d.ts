import * as Refs from "../../refs";
export declare type Material = (Refs.Item & {
    amount: number;
}) | (Refs.MaterialGroup & {
    amount: number;
});
