import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// import { RoutingModule } from './app.routing.module'; // ROUTER

// ANGULAR MATERIAL
import { MatAutocompleteModule } from '@angular/material/autocomplete'; // AUTOCOMPLETE
import { MatBadgeModule } from '@angular/material/badge'; // BADGE
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'; // BOTTOM SHEET
import { MatButtonModule } from '@angular/material/button'; // BUTTON
import { MatButtonToggleModule } from '@angular/material/button-toggle'; // BUTTON SYLE

import { MatCardModule } from '@angular/material/card'; // CARD
import { MatCheckboxModule } from '@angular/material/checkbox'; // CHECKBOX
import { MatChipsModule } from '@angular/material/chips'; // CHIPS
import { MatDatepickerModule } from '@angular/material/datepicker'; // DATE PICKER
import { MatDialogModule } from '@angular/material/dialog'; // DIALOG

import { MatDividerModule } from '@angular/material/divider'; // DIVIDER

import { DragDropModule } from '@angular/cdk/drag-drop'; // DRAG & DROP

import { MatExpansionModule } from '@angular/material/expansion'; // EXPANSION
import { MatFormFieldModule } from '@angular/material/form-field'; // FORM FIELD
import { MatGridListModule } from '@angular/material/grid-list'; // GRID LIST
import { MatIconModule } from '@angular/material/icon'; // ICON

import { MatInputModule } from '@angular/material/input'; // INPUT
import { MatListModule } from '@angular/material/list'; // LIST
import { MatMenuModule } from '@angular/material/menu'; // MENU
import { MatPaginatorModule } from '@angular/material/paginator'; // PAGINATOR
import { MatProgressBarModule } from '@angular/material/progress-bar'; // PROGRESS BAR

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // PROGRESS SPINNER
import { MatRadioModule } from '@angular/material/radio'; // RADIO BUTTONS
import { MatRippleModule } from '@angular/material/core'; // RIPPLE
import { MatSelectModule } from '@angular/material/select'; // SELECT
import { MatSidenavModule } from '@angular/material/sidenav'; // SIDENAV

import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // SLIDE TOGGLE
import { MatSliderModule } from '@angular/material/slider'; // SLIDER
import { MatSnackBarModule } from '@angular/material/snack-bar'; // SNACKBAR
import { MatSortModule } from '@angular/material/sort'; // SORT
import { MatStepperModule } from '@angular/material/stepper'; // STEPPER

import { MatTableModule } from '@angular/material/table'; // TABLE
import { MatTabsModule } from '@angular/material/tabs'; // TABS
import { MatToolbarModule } from '@angular/material/toolbar'; // TOOLBAR
import { MatTooltipModule } from '@angular/material/tooltip'; // TOOLTIP
import { MatTreeModule } from '@angular/material/tree';

// PAGES
// import { AnteraSwimlaneComponent } from './pages/antera-swimlane/antera-swimlane.component'; // TREE

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    // RoutingModule,

    // ANGULAR MATERIAL
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    // MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,

    // PAGES 
    // AnteraSwimlaneComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
