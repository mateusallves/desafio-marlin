import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MainScreenService } from '../main-screen.service';
import { Client } from 'src/assets/client.model';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css'],
})
export class MainScreenComponent implements OnInit {
  client: Client[] | undefined;
  clientColumns = ['name', 'corretor', 'status', 'action'];

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  dataSource = new MatTableDataSource<Client>();
  @ViewChild(MatPaginator, { read: true }) paginator!: MatPaginator;

  constructor(
    private mainScreenService: MainScreenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mainScreenService
      .readApi()
      .subscribe((client) => (this.client = client));
  }
}
