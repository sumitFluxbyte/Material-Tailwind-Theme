import { Component, EventEmitter, Output } from '@angular/core';
import navList from '../navigation-menu-list';

@Component({
  selector: 'app-horizontal-nav',
  templateUrl: './horizontal-nav.component.html',
  styleUrls: ['./horizontal-nav.component.scss']
})
export class HorizontalNavComponent {
  @Output("togglelayout") togglelayout: EventEmitter<any> = new EventEmitter();
  toggleside(){
    this.togglelayout.emit()
  }
  List = navList
}
