import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalManualComponent } from './modal-manual.component';

describe('ModalManualComponent', () => {
  let component: ModalManualComponent;
  let fixture: ComponentFixture<ModalManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalManualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
