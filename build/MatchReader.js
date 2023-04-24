"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
class MatchReader {
    static fromCsv(filename) {
        return new MatchReader(new CsvFileReader_1.default(filename));
    }
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((match) => {
            return [
                (0, utils_1.dateStringToDate)(match[0]),
                match[1],
                match[2],
                parseInt(match[3]),
                parseInt(match[4]),
                match[5],
                match[6],
            ];
        });
    }
}
exports.default = MatchReader;
