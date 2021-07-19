import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  public dataSource: any;
  public pagination: any;
  public next: string;
  public previous: string;
  constructor(private servicios: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.servicios.getListUser().subscribe((res: any) => {
      this.dataSource = res.data;
      this.pagination = res.meta.pagination;
      this.next = res.meta.pagination.links.next;
      this.previous = res.meta.pagination.links.previous;
    });
  }

  public search(value) {
    this.servicios.getListUserPage(value).subscribe((res: any) => {
      this.dataSource = res.data;
      this.pagination = res.meta.pagination;
      this.next = res.meta.pagination.links.next;
      this.previous = res.meta.pagination.links.previous;
    });
  }
}
