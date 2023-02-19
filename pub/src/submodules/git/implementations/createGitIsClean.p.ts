import * as pl from 'pareto-core-lib'

import * as api from '../api'

export const $$: api.CcreateGitIsClean = ($d) => {
    return ($) => {
        return $d.processCall(
            `git -C ${$.directory} diff --exit-code && git -C ${$d.joinNestedStrings($.directory)} log origin/master..master --exit-code`,
        ).map(($) => {
            switch ($[0]) {
                case 'error':
                    return pl.cc($[1], ($) => {
                        $d.handleError(['unknown', $.stderr])
                        return pl.asyncValue(false)
                    })
                case 'success':
                    return pl.cc($[1], ($) => {
                        return pl.asyncValue($d.trimEnd($) === "")
                    })
                default: return pl.au($[0])
            }
        })
    }
}