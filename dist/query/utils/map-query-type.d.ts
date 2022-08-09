import * as Queries from "../typings";
/**
 * Mops a query type to the BDOCodex query parameters.
 *
 * @param type - The query type to be mapped.
 * @returns    - A query descriptor.
 */
export declare const mapQueryType: (type: Queries.Types) => Queries.Descriptor;
