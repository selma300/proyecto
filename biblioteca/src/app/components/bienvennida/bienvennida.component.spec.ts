import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvennidaComponent } from './bienvennida.component';

describe('BienvennidaComponent', () => {
  let component: BienvennidaComponent;
  let fixture: ComponentFixture<BienvennidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvennidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvennidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
