import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as gapi from "../api"
import * as gdata from "../../data"

function ifSet<T, RT>(
    $: [false] | [true, T],
    then: ($: T) => RT,
    els: () => RT
) {
    if ($[0] === true) {
        return then($[1])
    } else {
        return els()
    }
}

export const $$: gapi.Ctransform = ($) => {
    function anyEntry(
        $: pt.Dictionary<boolean>,
    ): boolean {
        return $.reduce<boolean>(false, (current, $) => $
            ? true
            : current
        )
    }
    return {
        projects: $.projects.map<gapi.T.Workspace.projects.D>((project, key) => {
            const projectName = key


            const parts: pt.Dictionary<gapi.T.Workspace.projects.D.parts.D> = project.parts.map(($, key) => {

                function doPart(
                    part: gdata.T.Project.parts.D,
                    isPublic: boolean,
                ): gapi.T.Workspace.projects.D.parts.D {
                    return ifSet(
                        part.packageData,
                        ($) => {
                            const pd = $
                            function processDeps(deps: pt.Dictionary<gdata.T.Dependency>): pt.Dictionary<gapi.T.Dependency> {
                                return deps.map((v) => {

                                    return {
                                        'local version': v.version,
                                        'remote version': ifSet(v.remote, (vr) => vr['latest version'], () => [false]),
                                        'status': ifSet(
                                            v.remote,
                                            ($): gapi.T.Dependency.status => {
                                                if (`^${$['latest version']}` === v.version) {
                                                    return ['clean', {}]
                                                } else {
                                                    return ['not at latest version', {}]
                                                }
                                            },
                                            () => {
                                                return ['missing remote', {}]

                                            }
                                        ),
                                    }
                                })
                            }
                            const deps = processDeps(pd.dependencies)
                            const devDeps = processDeps(pd.devDependencies)
                            const status = ((): gapi.T.Workspace.projects.D.parts.D.status => {
                                if (isPublic) {
                                    return ifSet(
                                        pd.name,
                                        ($) => {
                                            if ($ === projectName) {
                                                return ifSet(
                                                    pd.remote,
                                                    ($) => {
                                                        return ifSet(
                                                            $['content fingerprint'],
                                                            ($): gapi.T.Workspace.projects.D.parts.D.status => {
                                                                const rcf = $
                                                                return ifSet(
                                                                    pd['content fingerprint'],
                                                                    ($) => {
                                                                        if ($ === rcf) {
                                                                            return ['clean', {}]
                                                                        } else {
                                                                            return ['fingerprint out of sync', {}]
                                                                        }
                                                                    },
                                                                    () => {
                                                                        return ['fingerprint out of sync', {}]
                                                                    }
                                                                )
                                                            },
                                                            () => {
                                                                return ['no remote fingerprint', {}]
                                                            }
                                                        )
                                                    },
                                                    () => {
                                                        return ['unpublished', {}]

                                                    }
                                                )
                                            } else {
                                                return ['invalid package name', {}]
                                            }
                                        },
                                        () => {
                                            return ['invalid package name', {}]

                                        }
                                    )
                                } else {
                                    return ['clean', {}]
                                }
                            })()

                            return {
                                'is public': isPublic,
                                'dependencies': deps,
                                'devDependencies': devDeps,
                                'status': status,
                                'version': pd.version,
                                'content fingerprint': pd['content fingerprint'],
                                'dependencies dirty': anyEntry(deps.map($ => $.status[0] !== 'clean'))
                                    ? true
                                    : anyEntry(deps.map($ => $.status[0] !== 'clean'))

                            }
                        },
                        () => {
                            return {
                                'is public': isPublic,
                                'dependencies': pm.wrapRawDictionary({}),
                                'devDependencies': pl.createEmptyDictionary(),
                                'dependencies dirty': true,
                                'status': ['missing package', {}],
                                'version': [false],
                                'content fingerprint': [false],
                            }
                        }
                    )

                }
                return doPart($, key === "pub")
            })

            return {
                parts: parts,
                'git is clean': project['git is clean'],
                'is dirty':
                    anyEntry(parts.map(($) => $['dependencies dirty']))
                        ? true
                        : project['git is clean']
            }

        })
    }
}