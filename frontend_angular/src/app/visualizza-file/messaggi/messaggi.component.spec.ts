import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessaggiComponent } from './messaggi.component';

describe('MessaggiComponent', () => {
  let component: MessaggiComponent;
  let fixture: ComponentFixture<MessaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessaggiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
