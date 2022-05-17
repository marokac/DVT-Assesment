import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistComponent } from './components/artist/artist.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {
  artistsDetailsRoute,
  artistsRoute,
  defaultRoute,
} from './shared/constant';

const routes: Routes = [
  { path: defaultRoute, redirectTo: defaultRoute, pathMatch: 'full' },
  {
    path: defaultRoute,
    component: DashboardComponent,
    children: [
      { path: defaultRoute, redirectTo: artistsRoute, pathMatch: 'full' },
      { path: artistsRoute, component: ArtistComponent },
      { path: artistsDetailsRoute, component: ArtistDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
