import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {
 @Input() pensamento = {
    id: '1',
    conteudo: 'aprendendo angular',
    autoria: 'Dev',
    modelo: '',
  }
  
}
