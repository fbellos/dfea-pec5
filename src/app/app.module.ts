import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ItemComponent } from './components/item/item.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { GridListComponent } from './components/grid-list/grid-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { TableListComponent } from './components/table-list/table-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ItemComponent,
    CardComponent,
    GridListComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule, 
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
