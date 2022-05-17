import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ArtistService } from 'src/app/shared/services';
import {
  LoadAlbumsAction,
  LoadAlbumsErrorAction,
  LoadAlbumsSuccessAction,
  LoadArtistDetailsAction,
  LoadArtistDetailsErrorAction,
  LoadArtistDetailsSuccessAction,
  SearchArtistAction,
  SearchArtistErrorAction,
  SearchArtistSuccessAction,
} from '../actions/artists.actions';
import { ArtistsActionTypes } from '../actions/types';


@Injectable()
export class ArtistEffect {
  constructor(
    private actions$: Actions,
    private artistService: ArtistService
  ) {}

  getArtists$ = createEffect(() =>
    this.actions$.pipe(
      ofType<SearchArtistAction>(ArtistsActionTypes.SEARCH_ARTISTS),
      switchMap((action) => {
        return this.artistService.searchArtist(action.payload).pipe(
          map((response) => {
            return new SearchArtistSuccessAction(response);
          }),
          catchError((error) => {
            return of(new SearchArtistErrorAction(error));
          })
        );
      })
    )
  );

  getArtistDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadArtistDetailsAction>(ArtistsActionTypes.LOAD_ARTIST_DETAILS),
      switchMap((action) => {
        return this.artistService.loadArtistDetails(action.payload).pipe(
          map((response) => {
            return new LoadArtistDetailsSuccessAction(response);
          }),
          catchError((error) => {
            return of(new LoadArtistDetailsErrorAction(error));
          })
        );
      })
    )
  );

  getArtistAlbums$ = createEffect(() =>
    this.actions$.pipe(
      ofType<LoadAlbumsAction>(ArtistsActionTypes.LOAD_ULBUMS),
      switchMap((action) => {
        return this.artistService.loadArtistAlbums(action.payload).pipe(
          map((response) => {
            return new LoadAlbumsSuccessAction(response);
          }),
          catchError((error) => {
            return of(new LoadAlbumsErrorAction(error));
          })
        );
      })
    )
  );
}
