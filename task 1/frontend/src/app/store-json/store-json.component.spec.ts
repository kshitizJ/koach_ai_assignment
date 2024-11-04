import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreJsonComponent } from './store-json.component';

describe('StoreJsonComponent', () => {
  let component: StoreJsonComponent;
  let fixture: ComponentFixture<StoreJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
