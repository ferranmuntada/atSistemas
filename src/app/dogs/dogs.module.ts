import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsRoutingModule } from './dogs-routing.module';
import { DogsViewComponent } from './dogs-view/dogs-view.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { dogFeatureKey, reducer } from './dog.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DogEffect } from './dog.effects';
import { DropdownModule } from '../shared/dropdown/dropdown.module';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [DogsViewComponent, DogsListComponent, DogCardComponent],
  imports: [
    CommonModule,
    DogsRoutingModule,
    ReactiveFormsModule,
    DropdownModule,
    StoreModule.forFeature(dogFeatureKey, reducer),
    EffectsModule.forFeature([DogEffect]),
    NgxLoadingModule.forRoot({})
  ]
})
export class DogsModule { }
