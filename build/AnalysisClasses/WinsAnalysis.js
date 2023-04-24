"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Results_1 = require("../Results");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
        this.wins = 0;
    }
    run(matches) {
        matches.forEach((game) => {
            //find man united games, HOME
            if (game[1] === this.team) {
                //if home team wins, increment wins by 1
                if (game[5] === Results_1.Results.HOME_WIN) {
                    this.wins++;
                }
            }
            //find man united games, AWAY
            if (game[2] === this.team) {
                //if away team wins, increment wins by 1
                if (game[5] === Results_1.Results.AWAY_WIN) {
                    this.wins++;
                }
            }
        });
        return `${this.team} has ${this.wins} wins!`;
    }
}
exports.default = WinsAnalysis;
