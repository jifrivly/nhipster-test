import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { NhipsterSharedModule } from 'app/shared/shared.module';
import { NhipsterCoreModule } from 'app/core/core.module';
import { NhipsterAppRoutingModule } from './app-routing.module';
import { NhipsterHomeModule } from './home/home.module';
import { NhipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    NhipsterSharedModule,
    NhipsterCoreModule,
    NhipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    NhipsterEntityModule,
    NhipsterAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class NhipsterAppModule {}
