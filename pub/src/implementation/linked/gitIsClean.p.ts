import * as pl from "pareto-core-lib"

import { f_gitIsClean } from "../public/gitIsClean.p";

import * as uglyStuff from "res-pareto-ugly-stuff"
import * as process from "res-pareto-process"

export const l_gitIsClean = f_gitIsClean(
    {
        processCall: process.f_call,
        trimEnd: uglyStuff.f_trimEnd,
    }
)