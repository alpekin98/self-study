import { StationService } from './../station.service';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MainpageComponent } from './mainpage.component';

describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('h1 must be Kulak Stations', () => {
    let h1Element = fixture.debugElement.query(By.css('h1'));
    expect(h1Element.nativeElement.textContent).toBe('Kulak Stations');
  });
});
