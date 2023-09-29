import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {
  //usa o exempo de ngfor para carregar os dados do component filho no component pai
  listaPensamentos=[
    {
      id: '1',
      conteudo: 'aprendendo angular',
      autoria: 'Dev',
      modelo: 'modelo2',
    },
    {
      id: '2',
      conteudo: 'Cominicação',
      autoria: 'Dev',
      modelo: 'modelo1',
    },
    {
      id: '3',
      conteudo: 'teste',
      autoria: 'Dev',
      modelo: 'modelo3',
    }
  ];
  //ngif
}
