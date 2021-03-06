import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotosInterface } from 'src/app/models/photos.interface';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  title = "Alurapic";

  photos: PhotosInterface[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';
  
  constructor( 
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
  ) { }

  
  ngOnInit(): void {

    this.userName = this.activatedRoute.snapshot.params.userName
    this.photos = this.activatedRoute.snapshot.data.photos

  }

  load() {

    this.photoService.listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {

      this.filter = ''

      this.photos = this.photos.concat(photos)
      
      if(this.photos.length) {
        this.hasMore = false
      }

    })

  }

}
