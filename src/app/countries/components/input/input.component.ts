import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder = '';

  deboncer: Subject<string> = new Subject();

  searchTerm = '';

  ngOnInit(): void {
    this.deboncer
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.onDebounce.emit(value);
      });
  }

  search() {
    this.onEnter.emit(this.searchTerm);
  }

  keyPressed() {
    this.deboncer.next(this.searchTerm);
  }

}
