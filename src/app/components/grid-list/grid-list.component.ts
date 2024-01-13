import { Component, Input } from '@angular/core';
import { ImageDTO } from '../../models/image.dto';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.css'
})
export class GridListComponent {

  @Input()
  items!: ImageDTO[];

}
