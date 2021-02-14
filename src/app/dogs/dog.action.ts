import { createAction, props } from '@ngrx/store';

export const getBreeds = createAction(
    '[Breeds] - get Breed List'
);

export const getBreedsSuccess = createAction(
    '[Breeds] - get Breed list success',
    props<{ data: string[] }>()
);

export const getBreedsFailure = createAction(
    '[Breeds] - get Breed list failure',
    props<{ error: any }>()
);

export const getDogsByBreed = createAction(
    '[Dogs] - get Dogs List By Breed',
    props<{ breed: string }>()
);

export const getDogsByBreedSuccess = createAction(
    '[Breeds] - get Dog list success',
    props<{ data: string[] }>()
);

export const getDogsByBreedFailure = createAction(
    '[Breeds] - get Dog list failure',
    props<{ error: any }>()
);
