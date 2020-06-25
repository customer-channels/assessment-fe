import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public router: Router,
    public translate: TranslateService) {
      this.configureTranslations();
  }

  configureTranslations() {
    this.translate.addLangs(['de', 'es', 'en']);
    this.translate.setDefaultLang('de');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/de|es|en/) ? browserLang : 'de');
  }
}
