import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmaginiComponent } from './immagini.component';

describe('ImmaginiComponent', () => {
  let component: ImmaginiComponent;
  let fixture: ComponentFixture<ImmaginiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImmaginiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImmaginiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
