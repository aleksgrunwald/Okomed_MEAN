import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalOfferComponent } from './vertical-offer.component';

describe('VerticalOfferComponent', () => {
  let component: VerticalOfferComponent;
  let fixture: ComponentFixture<VerticalOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
