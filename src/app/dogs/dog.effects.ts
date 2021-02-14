import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { getBreeds, getBreedsFailure, getBreedsSuccess, getDogsByBreed, getDogsByBreedFailure, getDogsByBreedSuccess } from './dog.action';
import { DogService } from './dog.service';

@Injectable()
export class DogEffect {

    constructor(private actions$: Actions, private dogService: DogService, private toastr: ToastrService,
                private translate: TranslateService) { }

    getBreeds$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getBreeds),
            switchMap(() =>
                this.dogService.getBreeds().pipe(
                    map((breeds) => getBreedsSuccess({ data: breeds })),
                    tap(() => this.toastr.success(this.translate.instant('breedLoadSuccess'))),
                    catchError((error) => of(getBreedsFailure({ error: error.error }))
                    )
                )
            )
        )
    );

    getDogsByBreed$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getDogsByBreed),
            switchMap(({ breed }) => {
                return this.dogService.getDogsByBreed(breed).pipe(
                    map((dogsList: any) => getDogsByBreedSuccess({ data: dogsList })),
                    tap(() => this.toastr.success(this.translate.instant('dogsLoadSuccess'))),
                    catchError((error) => of(getDogsByBreedFailure({ error: error.error })))
                );
            })
        )
    );
}
