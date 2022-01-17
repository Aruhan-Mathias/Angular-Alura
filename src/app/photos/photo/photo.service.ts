import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PhotosInterface } from 'src/app/models/photos.interface';
  
const API = 'http://localhost:3000'

@Injectable({
    providedIn: 'root'
})

export class PhotoService {


    constructor( private http: HttpClient ) {}

    listFromUser(userName: string) {

        return this.http.get<PhotosInterface[]>(API + '/' + userName + '/photos')

    }

    listFromUserPaginated(userName: string, page: number) {

        const params = new HttpParams().append('page', page.toString())

        return this.http.get<PhotosInterface[]>(API + '/' + userName + '/photos', { params } )

    }

}