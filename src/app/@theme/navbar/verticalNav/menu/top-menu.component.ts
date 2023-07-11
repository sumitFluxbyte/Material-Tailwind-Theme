import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenu {
  @Output("toggle") toggle: EventEmitter<any> = new EventEmitter();
  @Output("layout") layout: EventEmitter<any> = new EventEmitter();

  toggleside(){
    this.toggle.emit()
  }
  changelayout(){
    this.layout.emit()
  }
}
