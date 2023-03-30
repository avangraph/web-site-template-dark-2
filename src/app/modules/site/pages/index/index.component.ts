import { Component, OnInit } from '@angular/core';
import { Works } from 'src/app/interfaces/works';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})

export class IndexComponent implements OnInit {

  constructor(
    private worksService: WorksService
  ) { }

  works: Works[] = [
  ];
  pageWorks: Works[] = [
    {},
    {},
    {},
    {},
  ];

  ngOnInit(): void {
    this.worksService.getWorks().subscribe({
      next: (data) => {
        this.works = data;
        this.pageWorks = this.works.splice(0, 4);
      }
    })
  }

  loadNextWorks(): void {
    this.pageWorks = this.pageWorks.concat(this.works.splice(0, 4));
  }


}
