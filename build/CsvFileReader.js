"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
        this.filename = filename;
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, `utf-8`)
            .split(`\n`)
            .map((match) => match.split(`,`));
    }
}
exports.default = CsvFileReader;
