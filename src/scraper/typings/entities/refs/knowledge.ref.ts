import * as Entities from "../";
import { ScrapeFn } from "../../types";

export interface Knowledge {
    type: 'knowledge';

    id: string;

    icon: string;

    name: string;

    shortUrl: string;

    scrape: ScrapeFn<Entities.Knowledge>;
}