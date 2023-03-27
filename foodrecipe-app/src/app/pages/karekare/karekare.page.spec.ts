import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { KarekarePage } from './karekare.page';

describe('KarekarePage', () => {
  let component: KarekarePage;
  let fixture: ComponentFixture<KarekarePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KarekarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KarekarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to omelette page', () => {
    spyOn(router, 'navigate');
    component.omelette();
    expect(router.navigate).toHaveBeenCalledWith(['omelette']);
  })

});
