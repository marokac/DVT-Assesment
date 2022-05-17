import { ArtistsAction } from '../actions/artists.actions';
import { ArtistsActionTypes } from '../actions/types';


export const initialState = {
    artists: null,
    details: null,
    albums: null

};

export function ArtistReducer(state: any = initialState, action: ArtistsAction): any {
    switch (action.type) {
        case ArtistsActionTypes.SEARCH_ARTISTS_SUCCESS:
            return {
                ...state,
                artists: action.payload,
            };
        case ArtistsActionTypes.SEARCH_ARTISTS_ERROR:
            return {
                ...state,
                artists: action.payload,
            };
        case  ArtistsActionTypes.LOAD_ARTIST_DETAILS_SUCCESS:
            return {
                ...state,
                details: action.payload,
            };

        case  ArtistsActionTypes.LOAD_ARTIST_DETAILS_ERROR:
            return {
                ...state,
                details: action.payload,
            };
        case  ArtistsActionTypes.LOAD_ULBUMS_SUCCESS:
            return {
                ...state,
                albums: action.payload,
            };
        case  ArtistsActionTypes.LOAD_ULBUMS_ERROR:
            return {
                ...state,
                albums: action.payload,
            };
        default:
            return state;
    }
}
