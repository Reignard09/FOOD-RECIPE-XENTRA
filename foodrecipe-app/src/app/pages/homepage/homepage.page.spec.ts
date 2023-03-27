import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { HomepagePage } from './homepage.page';

describe('HomepagePage', () => {
  let component: HomepagePage;
  let fixture: ComponentFixture<HomepagePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

 // it('should create', () => {
 //   expect(component).toBeTruthy();
 // });

  it('should go to kaldereta page on kaldereta', () => {
    spyOn(router, 'navigate');
    component.kaldereta();
    expect(router.navigate).toHaveBeenCalledWith(['kaldereta']);
  })

//  it('should go to chicken adobo page', () => {
//    spyOn(router, 'navigate');
//    component.chickenadobo();
//    expect(router.navigate).toHaveBeenCalledWith(['chickenadobo']);
//  })

//  it('should go to karekare page', () => {
//    spyOn(router, 'navigate');
//    component.karekare();
//    expect(router.navigate).toHaveBeenCalledWith(['karekare']);
//  })

//  it('should go to omelette page', () => {
//    spyOn(router, 'navigate');
//    component.omelette();
//    expect(router.navigate).toHaveBeenCalledWith(['omelette']);
//  })

//  it('should go to spaghetti page', () => {
//    spyOn(router, 'navigate');
//    component.spaghetti();
//    expect(router.navigate).toHaveBeenCalledWith(['spaghetti']);
//  })

});
