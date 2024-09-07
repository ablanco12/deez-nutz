import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutModalComponent } from './nut-modal.component';

describe('NutModalComponent', () => {
  let component: NutModalComponent;
  let fixture: ComponentFixture<NutModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
