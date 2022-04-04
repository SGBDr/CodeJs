import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTipComponent } from './see-tip.component';

describe('SeeTipComponent', () => {
  let component: SeeTipComponent;
  let fixture: ComponentFixture<SeeTipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeTipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
