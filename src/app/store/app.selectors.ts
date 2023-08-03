import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.reducer';
import { IUser } from '../core/interfaces/user.interface';

// createFeatureSelector sirve para crear un selector de una feature
export const selectApp = createFeatureSelector<AppState>('app');

// crateSelector sirve para crear un selector
export const selectUsers = createSelector(
  selectApp,
  (state: AppState) => state.users
);

export const selectCurrentUser = (uuid) =>
  createSelector(selectUsers, (users: IUser[]) =>
    users
      ? users.find((user: IUser) => {
          return user.login.uuid === uuid;
        })
      : null
  );

export const selectSimilarUsers = (uuid) =>
  createSelector(selectUsers, (users: IUser[]) =>
    users
      ? users.filter((user: IUser) => {
          return user.login.uuid !== uuid;
        })
      : null
  );
