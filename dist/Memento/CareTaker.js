"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CareTaker = exports.History = void 0;
class History {
    constructor() {
        this.states = [];
    }
    push(state) {
        this.states.push(state);
    }
    pop() {
        return this.states.pop();
    }
}
exports.History = History;
class CareTaker {
    constructor() {
        this.states = [];
    }
    push(state) {
        this.states.push(state);
    }
    pop() {
        return this.states.pop();
    }
}
exports.CareTaker = CareTaker;
//# sourceMappingURL=CareTaker.js.map