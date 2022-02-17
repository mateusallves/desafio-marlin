import { Router } from '@angular/router';
import { MainScreenService } from './../main-screen.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/assets/client.model';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css'],
})
export class NewClientComponent implements OnInit {
  client: Client = {
    nome: '',
    corretor: '',
    telefone: null,
    empresa: '',
    email: '',
  };

  constructor(
    private mainScreenService: MainScreenService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  createProduct(): void {
    this.mainScreenService.createClient(this.client).subscribe(() => {
      this.mainScreenService.showOnConsole('Indicação salva com sucesso!');
      this.router.navigate(['']);
    });
  }
  cancel() {
    this.router.navigate(['']);
  }
}
