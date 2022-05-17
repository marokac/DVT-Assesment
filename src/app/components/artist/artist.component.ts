import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { artistsRoute } from 'src/app/shared/constant';
import {
  LoadArtistDetailsAction,
  SearchArtistAction,
} from 'src/app/state/actions/artists.actions';
import { LoadArtistsSelector } from 'src/app/state/selectors';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  searchForm: any;
  searchResult: any = [];
  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit(): void {
    this.buildCallBackGroup();
    this.getArtistResult();
  }

  buildCallBackGroup(): void {
    this.searchForm = new FormGroup({
      searchText: new FormControl(''),
    });

    this.formValueChanges();
  }

  formValueChanges(): void {
    this.searchForm.get('searchText').valueChanges.subscribe((value: any) => {
      this.searchResult = [];
      this.store.dispatch(new SearchArtistAction(value));
    });
  }

  getArtistResult(): void {
    this.store.select(LoadArtistsSelector).subscribe((result) => {
      if (result) {
        this.searchResult = result?.data;
      }
    });
  }

  viewDetails(artist: any): void {
    this.router.navigate([artistsRoute, artist.id]);
    this.store.dispatch(new LoadArtistDetailsAction(artist.id));
    return;
  }
}
