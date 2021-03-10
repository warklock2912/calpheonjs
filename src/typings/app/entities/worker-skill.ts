import { App, BDO } from '@typings/namespaces'
import { Generic } from './generic'

export interface WorkerSkill extends Generic<App.Entities.Types.WorkerSkill> {
    /** A worker skill has an effect. */
    effect: string
    /** The level of the worker required to acquire this skill. */
    level: BDO.NPCs.Workers.SkillLevels
    /** TOOD: not sure what this is (?) */
    price: number
}
