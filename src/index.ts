import MatchReader from "./MatchReader";
import Summary from "./Summary";

// const soccerMatchesFile = new MatchReader(`football.csv`);
// soccerMatchesFile.read();
// const soccerMatchesFile = new MatchReader(new CsvFileReader(`football.csv`));
const soccerMatchesFile = MatchReader.fromCsv(`football.csv`);
soccerMatchesFile.load();

// const summary = new Summary(new WinsAnalysis(`Chelsea`), new HtlmReport());
// summary.buildAndPrintReport(soccerMatchesFile.matches);
// const results = summary.analyser.run(soccerMatchesFile.matches);
// console.log(results);

const summary = Summary.winsAnalysisWithHtmlReport(`Chelsea`);
summary.buildAndPrintReport(soccerMatchesFile.matches);
console.log(`hello`);
