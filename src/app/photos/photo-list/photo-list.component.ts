import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosInterface } from 'src/app/models/photos.interface';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  title = "Alurapic"

  photos: PhotosInterface[] = [];
  
  constructor( 
    private photoService: PhotoService, 
    private activatedRoute: ActivatedRoute,
    ) { }
  
  ngOnInit(): void {
    
    const userName = this.activatedRoute.snapshot.params.userName

    this.photoService.listFromUser(userName)
    .subscribe(photos => this.photos = photos)

  }

}
