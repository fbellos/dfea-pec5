import { Component, Input } from '@angular/core';
import { ImageDTO } from '../../models/image.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  card!: ImageDTO;

}
