import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { DogState } from './dog.reducer';
import { selectLoading, selectBreeds, selectDogs } from './dog.selector';
import { getBreeds, getDogsByBreed } from './dog.action';


@Injectable({
    providedIn: 'root'
})
export class DogFacadeService {
    loading$: Observable<boolean> = this.store.pipe(select(selectLoading));
    showAllBreed$: Observable<string[]> = this.store.pipe(select(selectBreeds));
    showDogs$: Observable<string[]> = this.store.pipe(select(selectDogs));

    constructor(private store: Store<DogState>) { }

    getBreeds(): void {
        this.store.dispatch(getBreeds());
    }

    getDogsByBreed(breed: string): void {
        this.store.dispatch(getDogsByBreed({ breed }));
    }
}
