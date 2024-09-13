import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaFileComponent } from './visualizza-file.component';

describe('VisualizzaFileComponent', () => {
  let component: VisualizzaFileComponent;
  let fixture: ComponentFixture<VisualizzaFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizzaFileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualizzaFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
