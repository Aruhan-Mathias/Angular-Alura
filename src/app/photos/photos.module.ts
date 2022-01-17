import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModel } from './photo-list/photo-list.module';

@NgModule({
    imports: [ 
        CommonModule,
        PhotoModule,
        PhotoFormModule,
        PhotoListModel,
    ],
})

export class PhotosModule {

}