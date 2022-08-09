import { EntityTypes } from "../types";
export interface Generic {
    /** Indicates whcih properties are to be expected from the object. */
    type: EntityTypes;
    /** An entity has a unique identifier. */
    id: string;
    /** An entity has an icon. */
    icon: string;
    /** An entity has a name. */
    name: string;
    /** A shortened version of the entity url without the database base url. */
    shortUrl: string;
}
