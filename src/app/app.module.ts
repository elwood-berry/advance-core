import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AnteraTableComponent } from './components/antera-table/antera-table.component';

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
import {MatRadioModule} from '@angular/material/radio'; // ??
import {MatRippleModule} from '@angular/material/core'; // ??
import {MatSelectModule} from '@angular/material/select'; // ??
import {MatSidenavModule} from '@angular/material/sidenav'; // ??

import {MatSlideToggleModule} from '@angular/material/slide-toggle'; // ??
import {MatSliderModule} from '@angular/material/slider'; // ??
import {MatSnackBarModule} from '@angular/material/snack-bar'; // ??
import {MatSortModule} from '@angular/material/sort'; // ??
import {MatStepperModule} from '@angular/material/stepper'; // ??

import {MatTableModule} from '@angular/material/table'; // ??
import {MatTabsModule} from '@angular/material/tabs'; // ??
import {MatToolbarModule} from '@angular/material/toolbar'; // ??
import {MatTooltipModule} from '@angular/material/tooltip'; // ??
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  imports: [BrowserModule, FormsModule, MatInputModule],
  declarations: [AppComponent, HelloComponent, AnteraTableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
