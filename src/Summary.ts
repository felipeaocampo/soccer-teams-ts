import { MatchData } from "./MatchReader";
import WinsAnalysis from "./AnalysisClasses/WinsAnalysis";
import HtlmReport from "./ReportClasses/HTMLReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtlmReport());
  }

  constructor(public analyser: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyser.run(matches);
    this.outputTarget.print(report);
  }
}

export default Summary;
