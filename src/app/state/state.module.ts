import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment.prod';
import { ArtistEffect } from './effects';
import { ArtistReducer } from './reducers';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['artists'],
    rehydrate: true,
    storage: sessionStorage,
    checkStorageAvailability: false,
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  imports: [
    StoreModule.forRoot(
      {
        artists: ArtistReducer,
      },
      {
        metaReducers,
      }
    ),
    EffectsModule.forRoot([ArtistEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
  ],
  declarations: [],
  providers: [],
  exports: [],
})
export class StateManagementModule {
  static forRoot(): ModuleWithProviders<StateManagementModule> {
    return {
      ngModule: StateManagementModule,
    };
  }
}
