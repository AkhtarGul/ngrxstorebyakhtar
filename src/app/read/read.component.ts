// Import our actions at the top
import * as TutorialActions from './../actions/tutorial.actions';

import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { Tutorial } from '../models/tutorial.model';

@Component({
  selector: 'read-app',

  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  // Section 1
  tutorials: Observable<Tutorial[]>;

  // Section 2
  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  // In the class, add:
  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  ngOnInit() {}
}
