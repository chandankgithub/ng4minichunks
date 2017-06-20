import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'ngonchanges-parent-component',
  templateUrl: './ngonchanges-parent.component.html',
  styleUrls: ['./ngonchanges-parent.component.css']
})
export class NgOnChangesParentComponent implements OnInit, OnChanges {

  value={
    counter:90
  }
 
  ngOnInit(){
    console.log('NgOnChangesParentComponent ngOnInit() called.')
  }
  ngOnChanges() {
    console.log('NgOnChangesParentComponent ngOnChanges() called.')
  }

  resetChild(){
    /**Important note: incrementing only the property will not call onChanges of child component
     * To call the onChanges of child component you need to change the reference completely.
     */
    //this.value.counter=100;

    this.value={
      counter:100
    }
  }
}
