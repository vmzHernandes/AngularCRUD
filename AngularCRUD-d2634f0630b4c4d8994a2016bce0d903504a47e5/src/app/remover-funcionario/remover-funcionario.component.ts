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
    var i = 0;
    // Verifica se o funcionário existe
    if (!this.FuncionarioLista.find((funcionario) => funcionario.id === this.inputIdRemove)) {
      const erro = document.getElementById('erroRemove');
      erro!.style.display = 'block'
      setTimeout(() => { erro!.style.display = 'none' }, 2000)
    }

    for (i; i < this.FuncionarioLista.length; i++) {
      if (this.FuncionarioLista[i].id == this.inputIdRemove) {
        // Se o ID existe, remove da lista
        this.FuncionarioLista.splice(i, 1);
        const sucesso = document.getElementById('sucessoRemove');
        sucesso!.style.display = 'block'
        setTimeout(() => { sucesso!.style.display = 'none' }, 2000)
      }
    }
  }


  @Output() onButtonClick = new EventEmitter<any>();
  removeFuncionario() { }
}
