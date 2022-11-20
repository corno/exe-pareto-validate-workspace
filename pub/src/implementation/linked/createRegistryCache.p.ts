import { p_reportProjects } from "../public/reportProjects.p";

import * as uglyStuff from "res-pareto-ugly-stuff"
import * as collation from "res-pareto-collation"
import { f_createRegistryCache } from "../public/createRegistryCache.p";


// export const l_createRegistryCache = f_createRegistryCache(
//     {
//         httpsResource: createHTTPSResource(
//             registryData,
//             {
//                 onError: () => {
//                     pl.logDebugMessage("IMPLEMENT HTTPS ERROR")
//                 }
//             }
//         ),
//     },
//     ($, $i) => {
//         $._execute($i)
//     }
// )