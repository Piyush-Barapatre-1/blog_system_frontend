import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBlogsComponent } from './register-blogs.component';

describe('RegisterBlogsComponent', () => {
  let component: RegisterBlogsComponent;
  let fixture: ComponentFixture<RegisterBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterBlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
