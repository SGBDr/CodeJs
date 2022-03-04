import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocComponent } from './doc/doc.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { SolveComponent } from './solve/solve.component';
import { EditorComponent } from './editor/editor.component';
import { ToastComponent } from './toast/toast.component';
import { FormsModule } from '@angular/forms';
import { AddPuzzleComponent } from './add-puzzle/add-puzzle.component';

const routes : Routes = [
  {path:'home', component: HomeComponent},
  {path:'tips', component: DocComponent},
  {path:'solve/:id', component: SolveComponent},
  {path:'furom', component: SolveComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PuzzleComponent,
    DocComponent,
    SolveComponent,
    EditorComponent,
    ToastComponent,
    AddPuzzleComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
