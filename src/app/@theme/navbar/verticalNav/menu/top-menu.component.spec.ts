import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenu } from './top-menu.component';

describe('HorizontalComponent', () => {
  let component: TopMenu;
  let fixture: ComponentFixture<TopMenu>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopMenu]
    });
    fixture = TestBed.createComponent(TopMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
