import cheerio from 'cheerio'
import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/utils/matcher'
import { ShortURL } from '@helpers/utils/short-url'
import { parseNumber } from '@helpers/utils/parse-number'
import { createRef } from '@helpers/utils/create-ref'
import { substrOf } from '@helpers/utils/substr-of'
import { Entities } from '../../query'
import { Getter } from './getter.type'

export const getRewards: Getter<'rewards'> = (data) => {
    const matchers = {
        standard: Matcher.initWith('Standard'),
        choseOneOf: Matcher.initWith('Choose'),
    }
    const rewards: Entities.Quest['rewards'] = {
        choseOneOf: [],
        standard: [
            { type: 'exp', name: 'EXP', amount: parseNumber(data[5].display) },
            { type: 'exp', name: 'Skill EXP', amount: parseNumber(data[6].display) },
            { type: 'exp', name: 'Contribution EXP', amount: parseNumber(data[7]) },
        ],
    }

    const $ = cheerio.load('<div>' + data[8] + '<div>')
    let activeKey = 'standard' as keyof typeof matchers
    $('div').contents().toArray().forEach(elem => {
        const node = $(elem)
        const text = node.text()
        // When the node refers to an item.
        if (elem.type === 'tag' && elem.tagName === 'div') {
            const url = node.find('a').attr('href')
            if (!url)
                return
            const { type, id } = ShortURL.decompose(url)
            if (type !== BDO.Entities.Types.Item)
                return
            return rewards[activeKey].push(createRef({
                id,
                type,
                icon: substrOf(
                    node.find('.icon_wrapper').text(),
                    { left: 'src="', right: '"' },
                ),
            }, { amount: parseNumber(node.find('.quantity_small').text(), 1) }))
        }
        // When the node refers to a label that changes the active key.
        const key = Object.keys(matchers).find(key => {
            return !matchers[key].lastMatch && matchers[key].findIn(text)
        }) as keyof typeof matchers
        if (key) activeKey = key
    })
    return rewards
}
