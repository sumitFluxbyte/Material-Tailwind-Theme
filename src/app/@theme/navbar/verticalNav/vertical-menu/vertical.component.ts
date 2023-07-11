import { Component ,Output, EventEmitter, ViewChild, Input} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import  navList  from "../../navigation-menu-list";
@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})
export class VerticalComponent {
  showFiller = false;
  @Output("togglelayout") togglelayout: EventEmitter<any> = new EventEmitter();
  toggleside(){
    this.togglelayout.emit()
  }
  List = navList
  
}
