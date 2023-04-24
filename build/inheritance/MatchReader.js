"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = __importDefault(require("./CsvFileReader"));
const utils_1 = require("./utils");
class MatchReader extends CsvFileReader_1.default {
    constructor(filename) {
        super();
        this.filename = filename;
        this.filename = filename;
    }
    mapRow(match) {
        return [
            (0, utils_1.dateStringToDate)(match[0]),
            match[1],
            match[2],
            parseInt(match[3]),
            parseInt(match[4]),
            match[5],
            match[6],
        ];
    }
}
exports.default = MatchReader;
