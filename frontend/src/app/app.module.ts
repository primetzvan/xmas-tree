import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import { HomeComponent } from './home/home.component';
import { TreeComponent } from './tree/tree.component';
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import { TypeSelectionComponent } from './tree/type-selection/type-selection.component';
import {MatSelectModule} from "@angular/material/select";
import { TreeListComponent } from './tree/tree-list/tree-list.component';
import { TreeDisplayComponent } from './tree/tree-display/tree-display.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { SaleComponent } from './sale/sale.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PayPalComponent } from './pay-pal/pay-pal.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TreeComponent,
    TypeSelectionComponent,
    TreeListComponent,
    TreeDisplayComponent,
    SaleComponent,
    PayPalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        HttpClientModule,
        MatSelectModule,
        MatSnackBarModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
