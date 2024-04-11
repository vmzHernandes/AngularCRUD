import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../funcionario';
import { AdicionarFuncionarioComponent } from '../adicionar-funcionario/adicionar-funcionario.component';
import { EditarFuncionarioComponent } from '../editar-funcionario/editar-funcionario.component';
import { RemoverFuncionarioComponent } from '../remover-funcionario/remover-funcionario.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AdicionarFuncionarioComponent, EditarFuncionarioComponent, RemoverFuncionarioComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  // Recebe a função declarada no parent
  @Input() onButtonClick: any;

  // Remove o usuário
  removeFuncionario(id: number) {
    // filter(): Percorre o array e remove o objeto que possua o ID da variavel 'id'
    // (u) => u.id !== id: Recebe um parametro u e, se o 'id' de u for igual ao 'id' do funcionario, remove ele
    this.Funcionarios = this.Funcionarios.filter((u) => u.id !== id);
  }


  // *** EDITAR FUNCIONÁRIO - Erro: Só edita o primeiro funcionário da db

  mostraForm() {
    let form = document.getElementById('table-form')!
    if (form.style.display === 'block') {
      form.style.display = 'none'
    } else {
      form.style.display = 'block'
    }
  }

  cancelaEdit() {
    let form = document.getElementById('table-form')!
    if (form.style.display === 'block') {
      form.style.display = 'none'
    }
  }

  // Edita o funcionário
  inputIdEdit = NaN
  nomeEdit = '';
  idadeEdit = NaN;
  cargoEdit = '';

  editaFuncionario() {
    let mensagemNome = document.getElementById('mensagem-nome')
    let mensagemIdade = document.getElementById('mensagem-idade')
    let mensagemCargo = document.getElementById('mensagem-cargo')

    for (var i = 0; i < this.Funcionarios.length; i++) {
      if (this.nomeEdit == '') {
        mensagemNome!.style.display = 'block'
        setTimeout(() => { mensagemNome!.style.display = 'none' }, 2000)
      } else {
        this.Funcionarios[i].nome = this.nomeEdit;
      }

      if (isNaN(this.idadeEdit)) {
        mensagemIdade!.style.display = 'block'
        setTimeout(() => { mensagemIdade!.style.display = 'none' }, 2000)
      } else {
        this.Funcionarios[i].idade = this.idadeEdit
      }

      if (this.cargoEdit == '') {
        mensagemCargo!.style.display = 'block'
        setTimeout(() => { mensagemCargo!.style.display = 'none' }, 2000)
      } else {
        this.Funcionarios[i].cargo = this.cargoEdit;
      }

      break
    }
  }

  // Base de dados
  Funcionarios: Funcionario[] = [
    {
    id: 1111,
    nome: 'Nome teste 1',
    idade: 1,
    cargo: 'Cargo teste 1',
    },
    {
    id: 1112,
    nome: 'Nome teste 2',
    idade: 2,
    cargo: 'Cargo teste 2',
    },
    {
    id: 1113,
    nome: 'Nome teste 3',
    idade: 3,
    cargo: 'Cargo teste 3',
    },
  ];
}




