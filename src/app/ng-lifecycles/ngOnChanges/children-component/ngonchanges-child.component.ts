import { Component, OnInit, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngonchanges-child',
  templateUrl: './ngonchanges-child.component.html',
  styleUrls: ['./ngonchanges-child.component.css']
})
export class NgOnchangesChildComponent implements OnInit, OnChanges {

  @Input()
  value= {counter:80}

  @Output()
  resetParent = new EventEmitter()
  ngOnInit() {
    console.log('NgOnchangesChildComponent ngOnInit() called.')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('NgOnchangesChildComponent ngOnChanges() called.')
    console.log(changes)
  }

  increment(){
    this.value.counter += 1;
  }

  resetFromParent(){
    this.resetParent.emit();
  }
}
