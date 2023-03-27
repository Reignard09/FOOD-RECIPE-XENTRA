import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { KalderetaPage } from './kaldereta.page';

describe('KalderetaPage', () => {
  let component: KalderetaPage;
  let fixture: ComponentFixture<KalderetaPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KalderetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KalderetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to chickenadobo page', () => {
    spyOn(router, 'navigate');
    component.chickenadobo();
    expect(router.navigate).toHaveBeenCalledWith(['chickenadobo']);
  })


});
