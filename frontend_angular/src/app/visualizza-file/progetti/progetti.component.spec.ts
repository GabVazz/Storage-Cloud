import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgettiComponent } from './progetti.component';

describe('ProgettiComponent', () => {
  let component: ProgettiComponent;
  let fixture: ComponentFixture<ProgettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgettiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
