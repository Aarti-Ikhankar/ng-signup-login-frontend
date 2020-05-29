import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { DebugElement } from '@angular/core';
import { By, by } from 'protractor';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let de: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent]
    })
      .compileComponents();//compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();//toBeTruthy == true 
  });

  it('should have a message `hello`', () => {
    expect(component.myVal).toContain('hello');//toContain('hell');[SUBSTRING MATCH] ,// toBe('hell') [EQUAL]
  });

  it('should be greater than jj', () => {
    expect(component.value).toBeGreaterThan(99);
  });

  // it('should have h1 tag', () => {
  //   expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert button')
    
  // })

  it('should toggle ',()=>{
    expect(component.submitted).toBeFalse();
    component.toggele();
    expect(component.submitted).toBeTruthy();
  });

  it('should toggele async',fakeAsync(()=>{
    expect(component.submitted).toBeFalse();
    component.toggeleAsync();
    tick(500);
    expect(component.submitted).toBeTruthy();
  }))
});


// it('should use ValueService', () => {
//   service = TestBed.inject(ValueService);
//   expect(service.getValue()).toBe('real value');
// });
// OR
// beforeEach(() => {
//   TestBed.configureTestingModule({ providers: [ValueService] });
//   service = TestBed.inject(ValueService);
// });