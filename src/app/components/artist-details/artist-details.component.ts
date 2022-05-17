import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadAlbumsAction } from 'src/app/state/actions/artists.actions';
import {
  LoadArtistAlbumsSelector,
  LoadArtistDetailsSelector,
} from 'src/app/state/selectors';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss'],
})
export class ArtistDetailsComponent implements OnInit {
  details: any = [];
  albums: any = [];
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.getArtistDetails();
    this.getArtistAlbums();
  }

  getArtistDetails(): void {
    this.store.select(LoadArtistDetailsSelector).subscribe((result: any) => {
      if (result) {
        this.details = result;
        this.loadArtistAlbums(this.details.id);
      }
    });
  }

  getArtistAlbums(): void {
    this.store.select(LoadArtistAlbumsSelector).subscribe((result: any) => {
      if (result) {
        this.albums = result.data;
      }
    });
  }

  loadArtistAlbums(id: any): void {
    this.store.dispatch(new LoadAlbumsAction(id));
  }
}
