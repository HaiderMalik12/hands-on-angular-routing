import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsModule } from './posts/posts.module';
const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [],
  // https://angular.io/guide/router#module-import-order-matters
  imports: [CommonModule, PostsModule, RouterModule.forRoot(appRoutes)], // Module import order does matter here
  exports: [RouterModule]
})
export class AppRoutingModule {}
