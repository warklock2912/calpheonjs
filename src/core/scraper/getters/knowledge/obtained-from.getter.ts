import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/utils/matcher'
import { ShortURL } from '@helpers/utils/short-url'
import { cleanStr } from '@helpers/utils/clean-str'
import { createRef } from '@helpers/utils/create-ref'
import { Refs } from '../../typings'
import { Getter } from './getter.type'

export const getObtainedFrom: Getter<'obtainedFrom'> = ({ $ }) => {
    const matcher = Matcher.initWith('Obtained from')
    const elements = $('.outer.item_info td').contents().toArray()

    let idx = elements.findIndex(elem => {
        const text = $(elem).text()
        return !!matcher.findIn(text)
    })
    if (idx === -1) return
    for (idx = idx + 1; idx < elements.length; idx++) {
        const elem = elements[idx]
        if (elem.type === 'tag' && elem.tagName === 'a')
            break
    }

    const anchor = $(elements[idx])
    const img = anchor.parent().find('img')
    const { type, id } = ShortURL.decompose(anchor.attr('href') as string)

    return createRef({
        id,
        type: type === BDO.Entities.Types.NPC
            ? BDO.Entities.Types.NPC
            : BDO.Entities.Types.Quest,
        name: cleanStr(anchor.text()),
        icon: img.attr('src'),
    }) as Refs.NPC | Refs.Quest
}
