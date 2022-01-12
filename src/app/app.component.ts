import { Component, OnInit } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';
import { PhotosInterface } from './models/photos.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  title = "Alurapic"

  photos: PhotosInterface[] = [];
  
  constructor(private photoService: PhotoService ) { }
  
  ngOnInit(): void {

    this.photoService.listFromUser('flavio')
    .subscribe(photos => this.photos = photos)

  }
  
}
