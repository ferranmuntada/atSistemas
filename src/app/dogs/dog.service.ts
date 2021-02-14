import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Response<T> {
    message: T;
    status: string;
}

@Injectable({
    providedIn: 'root'
})

export class DogService {
    private readonly url = environment.dogsApiUrl;
    constructor(private http: HttpClient) { }

    getBreeds(): Observable<string[]> {
        return this.http.get(`${this.url}/api/breeds/list/all`).pipe(
            map((res: Response<{ [key: string]: [] }>) => Object.keys(res.message))
        );
    }

    getDogsByBreed(breed: string): Observable<string[]> {
        return this.http.get(`${this.url}/api/breed/${breed}/images`).pipe(
            map((res: Response<string[]>) => res.message)
        );
    }
}
