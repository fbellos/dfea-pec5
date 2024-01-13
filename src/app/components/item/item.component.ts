import { Component, OnInit } from '@angular/core';
import { ImageDTO } from '../../models/image.dto';
import { ImagesService } from '../../services/images.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit{

  item!: ImageDTO;
  panelOpenState = false;

  constructor(
    private imagesService: ImagesService,
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    let identifier = this.activateRouter.snapshot.paramMap.get('id')
    if(identifier === null) {
      identifier = '0';
    }
    console.log('Identifier --> ', identifier);

    this.imagesService.getImageById(identifier).subscribe((image) => {
      if (!image) {
        return this.router.navigateByUrl('/');
      }

      this.item = image;
      console.log('Image -->', this.item);
      return null;
    });
  }

}
