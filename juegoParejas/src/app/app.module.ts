import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { GameCardComponent } from './carta/game-card/game-card.component';
import { RestartDialogComponent } from './carta/restart-dialog/restart-dialog.component';
import { CartaModule } from './carta/carta.module';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    RestartDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    CartaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
