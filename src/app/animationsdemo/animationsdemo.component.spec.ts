import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsdemoComponent } from './animationsdemo.component';

describe('AnimationsdemoComponent', () => {
  let component: AnimationsdemoComponent;
  let fixture: ComponentFixture<AnimationsdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationsdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationsdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
