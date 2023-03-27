import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { OmelettePage } from './omelette.page';

describe('OmelettePage', () => {
  let component: OmelettePage;
  let fixture: ComponentFixture<OmelettePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OmelettePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OmelettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to spaghetti page', () => {
    spyOn(router, 'navigate');
    component.spaghetti();
    expect(router.navigate).toHaveBeenCalledWith(['spaghetti']);
  })
});
