import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: []
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'artist/:id',
    component: ArtistComponent
  }, {
    path: 'album/:id',
    component: AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
