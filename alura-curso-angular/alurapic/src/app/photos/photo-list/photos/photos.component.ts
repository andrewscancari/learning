import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {
  @Input() photos: Photo[] = [];
  rows: Object[] = [];
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photos: Object[]): Object[] {
    const newRows: Object[] = [];

    for(let index = 0 ; index < photos.length ; index+=3) {
      newRows.push(photos.slice(index, index + 3));
    }

    return newRows;
  }

}
