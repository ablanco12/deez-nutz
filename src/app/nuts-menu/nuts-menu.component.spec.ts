import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutsMenuComponent } from './nuts-menu.component';

describe('NutsMenuComponent', () => {
  let component: NutsMenuComponent;
  let fixture: ComponentFixture<NutsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
