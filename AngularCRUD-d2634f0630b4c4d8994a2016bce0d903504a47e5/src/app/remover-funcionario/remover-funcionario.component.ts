import { Component, Input} from '@angular/core';
import { Funcionario } from '../funcionario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-remover-funcionario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './remover-funcionario.component.html',
  styleUrl: './remover-funcionario.component.css'
})

export class RemoverFuncionarioComponent {
  @Input() FuncionarioLista: Funcionario[] = [];

  // Remove funcionário por ID
  inputIdRemove = NaN;
  removeFuncionarioPorId() {
    console.log('função remover clicada')
    console.log(this.FuncionarioLista)
    var i = 0;
    // Verifica se o funcionário existe
    if (!this.FuncionarioLista.find((funcionario) => funcionario.id === this.inputIdRemove)) {
      // Se a div de id='erro' existe, executa o for
      const erro = document.getElementById('erroRemove');
      if (erro) {
        erro.style.display = 'block'
        setTimeout(() => {
          if (erro) {
            erro.style.display = 'none';
          }
        }, 2000)
      }
    }
    for (i; i < this.FuncionarioLista.length; i++) {
      if (this.FuncionarioLista[i].id == this.inputIdRemove) {
        // Se o ID existe, remove da lista
        this.FuncionarioLista.splice(i, 1);
      }
    }
  }

  @Output() onButtonClick = new EventEmitter<any>();
  removeFuncionario() { }
}
