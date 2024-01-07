import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTutorialComponent } from './my-tutorial.component';

describe('MyTutorialComponent', () => {
  let component: MyTutorialComponent;
  let fixture: ComponentFixture<MyTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyTutorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
