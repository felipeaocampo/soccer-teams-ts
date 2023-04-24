"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = __importDefault(require("./MatchReader"));
const Summary_1 = __importDefault(require("./Summary"));
// const soccerMatchesFile = new MatchReader(`football.csv`);
// soccerMatchesFile.read();
// const soccerMatchesFile = new MatchReader(new CsvFileReader(`football.csv`));
const soccerMatchesFile = MatchReader_1.default.fromCsv(`football.csv`);
soccerMatchesFile.load();
// const summary = new Summary(new WinsAnalysis(`Chelsea`), new HtlmReport());
// summary.buildAndPrintReport(soccerMatchesFile.matches);
// const results = summary.analyser.run(soccerMatchesFile.matches);
// console.log(results);
const summary = Summary_1.default.winsAnalysisWithHtmlReport(`Chelsea`);
summary.buildAndPrintReport(soccerMatchesFile.matches);
console.log(`hello`);
