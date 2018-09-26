import { Component, OnInit } from '@angular/core';
import { MatchPrediction } from './match-prediction';
import { Match } from './match';

@Component({
  selector: 'app-make-prediction',
  templateUrl: './make-prediction.component.html',
  styleUrls: ['./make-prediction.component.css']
})
export class MakePredictionComponent implements OnInit {

  constructor() {
     this.matches = [new Match(1, 'Manchester United', 'Chelsea'), new Match(1, 'Leicester City FC', 'Liverpool FC')];
     this.model = this.matches.map(m => new MatchPrediction(m));
  }

  ngOnInit() {
  }
  public matches: Match[];
  public model: MatchPrediction[];

  submitted = false;
  onSubmit() { this.submitted = true; }
}
