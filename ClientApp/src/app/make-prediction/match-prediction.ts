import { Match } from "./match";

export class MatchPrediction {
    constructor(
        public match: Match
      ) {  }

    public homeScore?: number;
    public awayScore?: number;
}
