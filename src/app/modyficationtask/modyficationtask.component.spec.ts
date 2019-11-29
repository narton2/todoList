import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModyficationtaskComponent } from './modyficationtask.component';

describe('ModyficationtaskComponent', () => {
  let component: ModyficationtaskComponent;
  let fixture: ComponentFixture<ModyficationtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModyficationtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModyficationtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
