// interpreter/stub.ts

import { loadSubstrate, ADMLSubstrate } from "./substrate.js";

class ADMLInterpreter {
    substrate: ADMLSubstrate | null = null;

    async init() {
        this.substrate = await loadSubstrate("911ec.com");
        // No printing, no rendering — silent initialization
    }
}

const interpreter = new ADMLInterpreter();
interpreter.init();
