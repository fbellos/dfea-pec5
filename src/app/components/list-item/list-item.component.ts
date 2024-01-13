import { Component, OnInit } from '@angular/core';
import { ImageDTO } from '../../models/image.dto';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent implements OnInit {

  items: ImageDTO[] = [];
  selectedView: string = 'cards';

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService
    .getAllItems()
    .subscribe((images) => this.items = images);
  }

}
