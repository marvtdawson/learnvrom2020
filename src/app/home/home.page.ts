import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class HomePage {

  headerLogo = '/assets/imgs/logo.png';
  // homePageImage = '/assets/imgs/site/front_office2.jpg';
  customerSatisfactionImage = '/assets/imgs/site/customer_satisfaction_2.png';
  // siteName = 'VROM';
  siteFooterName = 'VROM LLC';
  // siteTagLine = 'Manage Anywhere...';
  valueProposition = 'Capture Data Build Perception Increase Profits';
  valuePropositionFooter = 'Capture Data -> Build Perception -> Increase Profits';
  date = new Date().getFullYear();
  constructor() {}

  openFMLModal() {}

}
