import { Component } from '@angular/core';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  //usa o exempo de ngfor para carregar os dados do component filho no component pai
  listaPensamentos: Pensamento[] =[];
  //ngif
  constructor(private service:PensamentoService){}

  ngOnInit(): void {
    this.service.listar()
  }
}
