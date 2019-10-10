import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsBoardComponent } from './commands-board.component';

describe('CommandsBoardComponent', () => {
  let component: CommandsBoardComponent;
  let fixture: ComponentFixture<CommandsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
