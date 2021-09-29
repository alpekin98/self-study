import { StationService } from './../station.service';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MainpageComponent } from './mainpage.component';
import { DebugElement } from '@angular/core';

describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainpageComponent],
      imports: [FormsModule],
      providers: [StationService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('h1 must be Kulak Stations', () => {
    let h1Element = fixture.debugElement.query(By.css('h1'));
    expect(h1Element.nativeElement.textContent).toBe('Kulak Stations');
  });

  it('should Add button have Add innerText', () => {
    expect(debugElement.query(By.css('button')).nativeElement.innerText).toBe(
      'Add'
    );
  });

  it('should stationName input must be empty', () => {
    expect(
      debugElement.query(By.css('input[name=stationName]')).nativeElement.value
    ).toBe('');
  });

  it('should stationLocation select must be empty', () => {
    expect(
      debugElement.query(By.css('select[name=stationLocation]')).nativeElement
        .value
    ).toBe('');
  });

  it('should stationStatus checkbox must be false', () => {
    expect(
      debugElement.query(By.css('input[name=stationStatus]')).nativeElement
        .checked
    ).toBe(false);
  });
});
