import CsvFileReader from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { Results } from "./Results";

export type MatchData = [Date, string, string, number, number, Results, string];

class MatchReader extends CsvFileReader<MatchData> {
  constructor(public filename: string) {
    super();
    this.filename = filename;
  }

  mapRow(match: string[]): MatchData {
    return [
      dateStringToDate(match[0]),
      match[1],
      match[2],
      parseInt(match[3]),
      parseInt(match[4]),
      match[5] as Results,
      match[6],
    ];
  }
}

export default MatchReader;
