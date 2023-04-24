import { dateStringToDate } from "./utils";
import { Results } from "./Results";
import CsvFileReader from "./CsvFileReader";

export type MatchData = [Date, string, string, number, number, Results, string];

interface DataReader {
  read(): void;
  data: string[][];
}

class MatchReader {
  matches: MatchData[] = [];

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((match: string[]): MatchData => {
      return [
        dateStringToDate(match[0]),
        match[1],
        match[2],
        parseInt(match[3]),
        parseInt(match[4]),
        match[5] as Results,
        match[6],
      ];
    });
  }
}

export default MatchReader;
