import { createFeatureSelector, createSelector } from '@ngrx/store';
import { dogFeatureKey, DogState } from './dog.reducer';

const selectDogState = createFeatureSelector<DogState>(dogFeatureKey);

export const selectBreeds = createSelector(
    selectDogState,
    state => state.breeds
);

export const selectDogs = createSelector(
    selectDogState,
    state => state.dogs
);

export const selectLoading = createSelector(
    selectDogState,
    state => state.loading
);
