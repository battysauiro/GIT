import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NavigableListItemDirective } from '../navigable-list-item.directive';
import { VistasPagosComponent } from './components/vistas-pagos/vistas-pagos.component';
<<<<<<< HEAD
import { HeaderComponent } from './layout/header/header.component';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> fbcf5782e47f96dd9ba230a29efd0406e0698ab1
//import { FlexLayoutModule } from '@angular/';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,NavigableListItemDirective, VistasPagosComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    FormsModule, 
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
