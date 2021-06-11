import { BDO, BDOCodex } from '@typings/namespaces'
import { QueryableEntity } from './queryable-entity.type'
import { QueryTypes } from './query-types.enum'
import { Entities } from '.'

/**
 * Maps the query type to the corresponding entity type that
 * will be returned from query.
 * 
 * Many types may map to the same return type.
 * 
 * For example, a recipe material and a recipe product will
 * both map to a return type of recipes.
 */
export type ReturnType<T extends QueryTypes | 'F' = 'F'> = {
    [QueryTypes.QuestReward]: BDO.Entities.Types.Quest
    [QueryTypes.RecipeMaterial]: BDO.Entities.Types.Recipe
    [QueryTypes.ProcessingMaterial]: BDO.Entities.Types.Processing
    F: BDO.Entities.Types
}[T]

/**
 * Maps the query type to the corresponding entity type that is
 * used to perform the query.
 * 
 * Many types may map to the same queried type.
 * 
 * For example, both recipe materials and quest rewards receive
 * items as the queried types.
 */
export type QueriedType<T extends QueryTypes | 'F' = 'F'> = {
    [QueryTypes.QuestReward]: BDO.Entities.Types.Item
    [QueryTypes.RecipeMaterial]: BDO.Entities.Types.Item
    [QueryTypes.ProcessingMaterial]: BDO.Entities.Types.Item
    F: BDO.Entities.Types
}[T]

/**
 * Maps the queryable entity types to their corresponding
 * entity interfaces.
 * 
 * Many types may map to the same interface.
 * 
 * For example, a recipe material and a recipe product will
 * both map to a Recipe entity.
 */
export type ReturnEntity<T extends QueryableEntity | 'F' = 'F'> = {
    [BDO.Entities.Types.Quest]: Entities.Quest
    [BDO.Entities.Types.Recipe]: Entities.Recipe
    [BDO.Entities.Types.Processing]: Entities.Processing
    F: Entities.Generic
}[T]

/**
 * Maps the expected entity type to the corresponding
 * query response interface.
 */
export type Response<T extends QueryableEntity | 'F' = 'F'> = {
    [BDO.Entities.Types.Quest]: BDOCodex.Query.Responses.Quest
    [BDO.Entities.Types.Recipe]: BDOCodex.Query.Responses.Recipe
    [BDO.Entities.Types.Processing]: BDOCodex.Query.Responses.Processing
    F: BDOCodex.Query.Responses.Generic
}[T]