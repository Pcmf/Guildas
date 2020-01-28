import { NgModule } from '@angular/core';
import { MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatTabsModule,
    MatSidenavModule,
    MatCheckboxModule } from '@angular/material';
import {MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatDatepickerModule,
        MatDialogModule,
        MatToolbarModule,
        MatCardModule,
        MatTableModule,
        MatTabsModule,
        MatSortModule,
        MatSidenavModule,
        MatExpansionModule,
        MatCheckboxModule,
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatDatepickerModule,
        MatDialogModule,
        MatToolbarModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatTabsModule,
        MatSidenavModule,
        MatExpansionModule,
        MatCheckboxModule,
    ]
}) export class MatModulesImports { }
