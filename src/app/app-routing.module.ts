import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
