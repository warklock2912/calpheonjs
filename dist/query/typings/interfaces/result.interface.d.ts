import { EntityTypes } from "../types";
/**
 * The return object of a Query.
 */
export interface Result<T = any> {
    /** The type of the entities inside the `data` property. */
    readonly type: EntityTypes | null;
    /** The parsed url that was used to perform this query. */
    readonly url: string;
    /** The query results. */
    readonly data: T[];
}
