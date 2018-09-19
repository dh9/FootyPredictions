import { Component, OnInit } from '@angular/core';
import { MatchPrediction } from './match-prediction';
import { Match } from './match';

@Component({
  selector: 'app-make-prediction',
  templateUrl: './make-prediction.component.html',
  styleUrls: ['./make-prediction.component.css']
})
export class MakePredictionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  homeTeam = 'Manchester United';
  awayTeam = 'Chelsea';
  matches = [new Match(1, 'Manchester United', 'Chelsea'), new Match(1, 'Leicester City FC', 'Liverpool FC')]

  model = this.matches.forEach(m => new MatchPrediction(m.id, null, null));

  submitted = false;
  onSubmit() { this.submitted = true; }
}
