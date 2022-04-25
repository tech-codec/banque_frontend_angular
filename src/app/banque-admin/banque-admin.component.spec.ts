import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanqueAdminComponent } from './banque-admin.component';

describe('BanqueAdminComponent', () => {
  let component: BanqueAdminComponent;
  let fixture: ComponentFixture<BanqueAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanqueAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanqueAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
