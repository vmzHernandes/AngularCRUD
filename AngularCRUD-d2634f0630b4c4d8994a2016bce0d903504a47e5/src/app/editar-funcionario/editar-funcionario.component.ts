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

  verificarFuncionarioPorId() {
    if (!this.FuncionarioLista.find((funcionario) => funcionario.id === this.inputIdEdit)) {
      const erro = document.getElementById('erroEdit');
      erro!.style.display = 'block'
      setTimeout(() => { erro!.style.display = 'none' }, 2000)
    } else {
      // Mostra o form de edição
      const formEdit = document.getElementById('form-edicao')
      formEdit!.style.display = 'block'

      // Esconde o botão de editar
      const inputEditSubmit = document.getElementById('input-edit-submit')
      inputEditSubmit!.style.display = 'none'
    }
  }


  inputIdEdit = NaN
  inputNomeEdit = '';
  inputIdadeEdit = NaN;
  inputCargoEdit = '';

  editarFuncionarioPorId() {
    for (var i = 0; i < this.FuncionarioLista.length; i++) {
      if (this.FuncionarioLista[i].id === this.inputIdEdit) {

        let mensagemNomeEdit = document.getElementById('mensagem-nome-edit')
        let mensagemIdadeEdit = document.getElementById('mensagem-idade-edit')
        let mensagemCargoEdit = document.getElementById('mensagem-cargo-edit')

        if (this.inputNomeEdit === '') {
          mensagemNomeEdit!.style.display = 'block'
          setTimeout(() => { mensagemNomeEdit!.style.display = 'none' }, 2000)
        } else {
          this.FuncionarioLista[i].nome = this.inputNomeEdit;
        }
        if (isNaN(this.inputIdadeEdit)) {
          mensagemIdadeEdit!.style.display = 'block'
          setTimeout(() => { mensagemIdadeEdit!.style.display = 'none' }, 2000)
        } else {
          this.FuncionarioLista[i].idade = this.inputIdadeEdit
        }
        if (this.inputCargoEdit === '') {
          mensagemCargoEdit!.style.display = 'block'
          setTimeout(() => { mensagemCargoEdit!.style.display = 'none' }, 2000)
        } else {
          this.FuncionarioLista[i].cargo = this.inputCargoEdit;
        }
      }
    }
  }

  @Output() onButtonClick = new EventEmitter<any>();
  removeFuncionario() { }
}
