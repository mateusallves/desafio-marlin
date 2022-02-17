import { Client } from './../../assets/client.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MainScreenService } from './../main-screen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css'],
})
export class ClientDeleteComponent implements OnInit {
  client!: Client;

  constructor(
    private clientService: MainScreenService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.clientService.readById(id).subscribe((client) => {
        this.client = client;
      });
    }
  }

  deleteProduct(): void {
    this.clientService.delete(this.client.id!).subscribe(() => {
      this.clientService.showOnConsole('Indicação Excluída');
      this.router.navigate(['']);
    });
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
