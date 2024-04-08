import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../funcionario';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-editar-funcionario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editar-funcionario.component.html',
  styleUrl: './editar-funcionario.component.css'
})

export class EditarFuncionarioComponent {
  @Input() FuncionarioLista: Funcionario[] = [];

  inputIdEdit = NaN
  inputNomeEdit = '';
  inputIdadeEdit = NaN;
  inputCargoEdit = '';

  editarFuncionarioPorId() {

    // Verifica se o funcionário existe
    if (!this.FuncionarioLista.find((funcionario) => funcionario.id === this.inputIdEdit)) {
      // Se a div de id='erro' existe, executa o for
      const erro = document.getElementById('erroEdit');
      if (erro) {
        erro.style.display = 'block'
        setTimeout(() => {
          if (erro) {
            erro.style.display = 'none';
          }
        }, 2000)
      }

    // Se o funcionário existe, edita ele
    } else {

      const formEdit = document.getElementById('form-edit')
      if (formEdit) {
        formEdit.style.display = 'block'
      }
      
      for (var k = 0; k < this.FuncionarioLista.length; k++) {

        // Verifica se o id do funcionário da linha K é igual ao ID do input de edição, se sim, edita
        if (this.FuncionarioLista[k].id === this.inputIdEdit) {
          // Dado ID, edita nome do funcionário de ID correspondente
          if (this.inputNomeEdit == '') {
            console.log('Campo "nome" vazio, nenhuma alteração foi feita');
          } else {
            this.FuncionarioLista[k].nome = this.inputNomeEdit;
          }

          // Dado ID, edite idade do funcionário de ID correspondente
          if (isNaN(this.inputIdadeEdit)) {
            console.log('Campo "idade" vazio, nenhuma alteração foi feita');
          } else {
            this.FuncionarioLista[k].idade = this.inputIdadeEdit
          }

          // Dado ID, edita cargo do funcionário de ID correspondente
          if (this.inputCargoEdit == '') {
            console.log('Campo "cargo" vazio, nenhuma alteração foi feita')
          } else {
            this.FuncionarioLista[k].cargo = this.inputCargoEdit;
          }
        }
      }
    }
  }

  @Output() onButtonClick = new EventEmitter<any>();
  removeFuncionario() { }
}
