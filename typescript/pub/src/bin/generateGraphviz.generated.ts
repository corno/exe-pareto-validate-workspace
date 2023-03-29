#!/usr/bin/env node

import * as pe from 'pareto-core-exe'

import * as a_bindings from "../bindings/implementation.generated"

pe.runProgram(a_bindings.$api.CreateWorkspaceValidator()())