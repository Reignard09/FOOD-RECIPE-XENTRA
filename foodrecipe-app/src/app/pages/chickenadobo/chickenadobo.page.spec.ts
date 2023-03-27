import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ChickenadoboPage } from './chickenadobo.page';

describe('ChickenadoboPage', () => {
  let component: ChickenadoboPage;
  let fixture: ComponentFixture<ChickenadoboPage>;
  let router: Router;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickenadoboPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChickenadoboPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to karekare page', () => {
    spyOn(router, 'navigate');
    component.karekare();
    expect(router.navigate).toHaveBeenCalledWith(['karekare']);
  })
});
