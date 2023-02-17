import * as pl from 'pareto-core-lib'

import * as api from "../api"

export const $$: api.CunboundSerialize = ($d) => {
    return ($, $i) => {
        const connecter = pl.cc($.type, ($): string => {
            switch ($[0]) {
                case 'digraph':
                    return pl.cc($[1], ($) => {
                        return "->"
                    })
                case 'graph':
                    return pl.cc($[1], ($) => {
                        return "--"
                    })
                default: return pl.au($[0])
            }
        })
        $i.nestedLine(($i) => {
            $i.snippet(`digraph G {`)
            $i.indent(($i) => {
                $d.dictionaryForEach($.nodes, ($) => {
                    $i.nestedLine(($i) => {
                        $i.snippet($d.createIdentifier($.key))
                    })
                })
                $.edges.forEach(($) => {
                    $i.line(`${$d.createIdentifier($.from)}${connecter}${$d.createIdentifier($.to)}`)
                })
            })
            $i.snippet(`}`)
        })
    }
}