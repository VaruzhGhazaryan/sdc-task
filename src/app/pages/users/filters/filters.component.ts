// Angular
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

// Third part
import { debounceTime } from 'rxjs';

// Component specific
import { FilterEvent } from '../types';

const DEBOUNCE_TIME = 250;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filterCtrl: FormControl = new FormControl();

  @Output() changed: EventEmitter<FilterEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.filterCtrl.valueChanges.pipe(
      debounceTime(DEBOUNCE_TIME)
    ).subscribe(value => this.changed.emit({ filter: value }))
  }

}
