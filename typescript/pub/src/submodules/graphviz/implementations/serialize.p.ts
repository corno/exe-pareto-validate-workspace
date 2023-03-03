import * as pl from 'pareto-core-lib'

import * as api from "../api"

import * as mforeach from "res-pareto-foreach"
import * as mstring from "res-pareto-string"
import * as mfp from "lib-fountain-pen"
import * as mcollation from "res-pareto-collation"

import { $$ as us } from "./unboundSerialize.p"

export const $$: api.Cserialize = ($) => {
    mfp.$a.createWriter({
        'onError': () => {
            pl.implementMe("DFSFSD")
        },
        'reportSuperfluousNode': () => {
            pl.implementMe("DFSFSD")
        },
    })($.path, ($i) => {
        $i.file("FIXME.dot", ($i) => {

            us({
                'dictionaryForEach': mforeach.$a.createDictionaryForEach({
                    'compare': mcollation.$a.localeIsABeforeB
                }),
                'createIdentifier': ($) => {
                    return `"${mstring.$a.replaceAll({
                        'value': $,
                        'pattern': "\"",
                        'replacement': "\\\"",
                    })}"`
                } 
            })($.graph, $i)
        })

    })
}