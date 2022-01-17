import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { PhotosModule } from '../photos.module';


@Injectable({
    providedIn: 'root',
})
export class PhotoListResolver implements Resolve<Observable<PhotosModule[]>> {

    constructor(private photoService: PhotoService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhotosModule[]> {
        const userName = route.params.userName

        return this.photoService.listFromUserPaginated(userName, 1)
    }

}