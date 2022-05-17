import { Action } from '@ngrx/store';
import { ArtistsActionTypes } from './types';

export class SearchArtistAction implements Action {
  readonly type = ArtistsActionTypes.SEARCH_ARTISTS;
  constructor(readonly payload: any) {}
}
export class SearchArtistSuccessAction implements Action {
  readonly type = ArtistsActionTypes.SEARCH_ARTISTS_SUCCESS;
  constructor(readonly payload: any) {}
}

export class SearchArtistErrorAction implements Action {
  readonly type = ArtistsActionTypes.SEARCH_ARTISTS_ERROR;
  constructor(readonly payload: any) {}
}

export class LoadArtistDetailsAction implements Action {
  readonly type = ArtistsActionTypes.LOAD_ARTIST_DETAILS;
  constructor(readonly payload: any) {}
}

export class LoadArtistDetailsSuccessAction implements Action {
  readonly type = ArtistsActionTypes.LOAD_ARTIST_DETAILS_SUCCESS;
  constructor(readonly payload: any) {}
}
export class LoadArtistDetailsErrorAction implements Action {
  readonly type = ArtistsActionTypes.LOAD_ARTIST_DETAILS_ERROR;
  constructor(readonly payload: any) {}
}

export class LoadAlbumsAction implements Action {
  readonly type = ArtistsActionTypes.LOAD_ULBUMS;
  constructor(readonly payload: any) {}
}

export class LoadAlbumsSuccessAction implements Action {
  readonly type = ArtistsActionTypes.LOAD_ULBUMS_SUCCESS;
  constructor(readonly payload: any) {}
}
export class LoadAlbumsErrorAction implements Action {
  readonly type = ArtistsActionTypes.LOAD_ULBUMS_ERROR;
  constructor(readonly payload: any) {}
}

export type ArtistsAction =
  | SearchArtistAction
  | SearchArtistSuccessAction
  | LoadArtistDetailsAction
  | LoadArtistDetailsSuccessAction
  | LoadArtistDetailsErrorAction
  | LoadAlbumsAction
  | LoadAlbumsSuccessAction
  | LoadAlbumsErrorAction
  | SearchArtistErrorAction;
