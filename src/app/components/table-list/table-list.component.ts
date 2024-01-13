import { Component, Input } from '@angular/core';
import { ImageDTO } from '../../models/image.dto';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent {

  @Input()
  items!: ImageDTO[];

}
