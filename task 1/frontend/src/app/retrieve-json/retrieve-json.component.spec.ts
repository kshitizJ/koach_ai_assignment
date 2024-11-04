import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveJsonComponent } from './retrieve-json.component';

describe('RetrieveJsonComponent', () => {
  let component: RetrieveJsonComponent;
  let fixture: ComponentFixture<RetrieveJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetrieveJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
