import { createReducer, on } from '@ngrx/store';
import * as fromDogAction from './dog.action';

export const dogFeatureKey = 'dog';

export interface DogState {
    breeds: string[];
    dogs: string[];
    loading: boolean;
    error: string;
}

const initialState: DogState = {
    breeds: [],
    dogs: [],
    loading: false,
    error: null
};

export const reducer = createReducer(
    initialState,
    on(fromDogAction.getBreeds, (state) => {
        return {
            ...state,
            loading: true
        };
    }),
    on(fromDogAction.getBreedsSuccess, (state, action) => {
        return {
            ...state,
            breeds: [...action.data],
            loading: false
        };
    }),
    on(fromDogAction.getBreedsFailure, (state, action) => {
        return {
            ...state,
            error: action.error,
            loading: false
        };
    }),
    on(fromDogAction.getDogsByBreed, (state) => {
        return {
            ...state,
            loading: true
        };
    }),
    on(fromDogAction.getDogsByBreedSuccess, (state, action) => {
        return {
            ...state,
            dogs: [...action.data],
            loading: false
        };
    }),
    on(fromDogAction.getDogsByBreedFailure, (state, action) => {
        return {
            ...state,
            error: action.error,
            loading: false
        };
    })
);
