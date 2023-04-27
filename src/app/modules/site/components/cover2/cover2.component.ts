import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cover2',
  templateUrl: './cover2.component.html',
  styleUrls: ['./cover2.component.sass']
})
export class Cover2Component implements OnInit {

  @Input() section: any;

  imagesUrl = environment.imagesUrl;

  constructor() { }

  ngOnInit(): void {
  }

}
