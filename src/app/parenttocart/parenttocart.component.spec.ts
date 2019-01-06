import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttocartComponent } from './parenttocart.component';

describe('ParenttocartComponent', () => {
  let component: ParenttocartComponent;
  let fixture: ComponentFixture<ParenttocartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenttocartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
