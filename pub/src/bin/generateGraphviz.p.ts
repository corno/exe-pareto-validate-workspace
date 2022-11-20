// #!/usr/bin/env node

// import * as pb from "pareto-core-exe"

// import * as exe from "lib-pareto-exe"

// // import { generateGraphviz } from "../implementation"

// import { registryData } from "../data/registryData.p"

// const newline = "\n"

// import { l_generateGraphviz } from "../implementation/linked/generateGraphviz.p"


// pb.runProgram(($, $i) => {
//     l_generateGraphviz()(
//         {
//             arguments: $.arguments,
//             registryData: registryData,
//         },
//         {
//             log: exe.f_createLogger(
//                 {
//                     newline: newline,
//                 },
//                 $i.stdout,
//             ),
//             logError: exe.f_createLogger(
//                 {
//                     newline: newline,
//                 },
//                 $i.stderr,
//             ),
//         },
//     )

// })
