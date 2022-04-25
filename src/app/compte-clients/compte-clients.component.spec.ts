import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteClientsComponent } from './compte-clients.component';

describe('CompteClientsComponent', () => {
  let component: CompteClientsComponent;
  let fixture: ComponentFixture<CompteClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
