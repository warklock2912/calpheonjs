import { Matcher } from '@helpers/factory/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

export const getExp: Getter<number> = ({ $ }) => {
    const matcher = Matcher('EXP')
    const elements = $('.category_text')
        .parent().contents().toArray()
    const element = elements.find(element => {
        const text = $(element).text()
        return !!matcher.findIn(text)
    })
    if (!element || !matcher.lastMatch) return 0
    return parseNumber(matcher.lastMatch.str, 0)
}
