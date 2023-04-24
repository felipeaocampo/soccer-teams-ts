import fs from "fs";
import { Results } from "./Results";

abstract class CsvFileReader<T> {
  data: T[] = [];
  abstract filename: string;
  abstract mapRow(match: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, `utf-8`)
      .split(`\n`)
      .map((match: string): string[] => match.split(`,`))
      .map(this.mapRow);
  }
}

export default CsvFileReader;
