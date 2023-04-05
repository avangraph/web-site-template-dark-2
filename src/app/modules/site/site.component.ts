import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.sass']
})
export class SiteComponent implements OnInit {

  constructor(
    private siteService: SiteService
  ) { }

  data: any;

  ngOnInit(): void {
  }

}
