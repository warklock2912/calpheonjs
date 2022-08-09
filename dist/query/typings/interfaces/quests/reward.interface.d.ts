import * as Refs from "../../refs";
export declare type Reward = (Refs.Item & {
    amount: number;
}) | (Refs.EXP & {
    amount: number;
});
