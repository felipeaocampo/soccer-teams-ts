import { MatchData } from "../MatchReader";
import { Results } from "../Results";
import { Analyzer } from "../Summary";

class WinsAnalysis implements Analyzer {
  wins: number = 0;

  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    matches.forEach((game: MatchData): void => {
      //find man united games, HOME
      if (game[1] === this.team) {
        //if home team wins, increment wins by 1
        if (game[5] === Results.HOME_WIN) {
          this.wins++;
        }
      }
      //find man united games, AWAY
      if (game[2] === this.team) {
        //if away team wins, increment wins by 1
        if (game[5] === Results.AWAY_WIN) {
          this.wins++;
        }
      }
    });

    return `${this.team} has ${this.wins} wins!`;
  }
}

export default WinsAnalysis;
