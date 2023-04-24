"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WinsAnalysis_1 = __importDefault(require("./AnalysisClasses/WinsAnalysis"));
const HTMLReport_1 = __importDefault(require("./ReportClasses/HTMLReport"));
class Summary {
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinsAnalysis_1.default(team), new HTMLReport_1.default());
    }
    constructor(analyser, outputTarget) {
        this.analyser = analyser;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const report = this.analyser.run(matches);
        this.outputTarget.print(report);
    }
}
exports.default = Summary;
