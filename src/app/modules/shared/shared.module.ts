import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from '../routing/routing.module';
import { AlphabetSelectorComponent } from './components/alphabet-selector/alphabet-selector.component';
import { TrimPipe } from './pipes/trim.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

const material = [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatDialogModule
]

@NgModule({
    declarations: [AlphabetSelectorComponent, TrimPipe, ConfirmDialogComponent],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        material
    ],
    exports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RoutingModule,
        HttpClientModule,
        AlphabetSelectorComponent,
        BrowserAnimationsModule,
        FlexLayoutModule,
        material,
        TrimPipe
    ]
})
export class SharedModule { }