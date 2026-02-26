// interpreter/stub.ts
import { loadSubstrate } from "./substrate.js";
class ADMLInterpreter {
    constructor() {
        this.substrate = null;
    }
    async init() {
        this.substrate = await loadSubstrate("911ec.com");
        // No printing, no rendering — silent initialization
    }
}
const interpreter = new ADMLInterpreter();
interpreter.init();
