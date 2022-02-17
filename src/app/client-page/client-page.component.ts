import { MainScreenService } from './../main-screen.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/assets/client.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css'],
})
export class ClientPageComponent implements OnInit {
  client: Client[] | undefined;
  clientColumns = ['name', 'corretor', 'status', 'action'];

  constructor(
    private mainScreenService: MainScreenService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //  this.mainScreenService.readById().pipe()
  }
}
