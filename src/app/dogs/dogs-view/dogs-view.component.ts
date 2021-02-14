import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { DogFacadeService } from '../dog.facade';

@Component({
  selector: 'app-dogs-view',
  templateUrl: './dogs-view.component.html',
  styleUrls: ['./dogs-view.component.scss']
})
export class DogsViewComponent implements OnInit, OnDestroy {

  breedControl: FormControl = new FormControl();
  subscription: Subscription = new Subscription();

  breeds$: Observable<string[]> = this.dogFacadeService.showAllBreed$;
  dogs$: Observable<string[]> = this.dogFacadeService.showDogs$;
  loading$: Observable<boolean> = this.dogFacadeService.loading$;

  constructor(private dogFacadeService: DogFacadeService) { }

  ngOnInit(): void {
    this.subscription = this.breedControl.valueChanges.subscribe((breed: string) => {
      this.dogFacadeService.getDogsByBreed(breed);
    });
    this.dogFacadeService.getBreeds();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
