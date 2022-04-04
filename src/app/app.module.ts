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
import { FuromComponent } from './furom/furom.component';
import { TipsComponent } from './tips/tips.component';
import { AddTipsComponent } from './add-tips/add-tips.component';
import { PuzzleService } from './services/puzzle.service.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { SeeTipComponent } from './see-tip/see-tip.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'share', component: DocComponent},
  {path:'share/tips/add', component: AddTipsComponent},
  {path:"share/tips/open/:id", component: SeeTipComponent},
  {path:'home/solve/:id', component: SolveComponent},
  {path:'furom', component: FuromComponent},
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
    AddPuzzleComponent,
    FuromComponent,
    TipsComponent,
    AddTipsComponent,
    SeeTipComponent
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
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PuzzleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
