import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSheetComponent } from './nav-bar-sheet.component';

describe('NavBarSheetComponent', () => {
  let component: NavBarSheetComponent;
  let fixture: ComponentFixture<NavBarSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBarSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
