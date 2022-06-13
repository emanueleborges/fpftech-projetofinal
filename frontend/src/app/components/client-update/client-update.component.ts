import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client/client.model';
import { ClientService } from '../client/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  client!: Client

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
    ) { }



  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.clientService.readById(id).subscribe(client => {
      this.client = client
    });
  }


  updateClient(): void {
    this.clientService.update(this.client).subscribe(() => {
      this.clientService.showMessage('Cliente alterado com sucesso!')
      this.router.navigate(["/clients"]);
    })
  }



  cancel(): void {
    this.router.navigate(['/clients'])
  }

}
