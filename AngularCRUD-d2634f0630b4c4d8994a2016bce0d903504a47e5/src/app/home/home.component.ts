import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../funcionario';
import { AdicionarFuncionarioComponent } from '../adicionar-funcionario/adicionar-funcionario.component';
import { EditarFuncionarioComponent } from '../editar-funcionario/editar-funcionario.component';
import { RemoverFuncionarioComponent } from '../remover-funcionario/remover-funcionario.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AdicionarFuncionarioComponent, EditarFuncionarioComponent, RemoverFuncionarioComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  // Recebe a função declarada no parent
  @Input() onButtonClick: any;

  removeFuncionario(id: number) {
    this.Funcionarios = this.Funcionarios.filter((u) => u.id !== id);
  }


  // *** EDITAR FUNCIONÁRIO - Erro: Só edita o primeiro funcionário da db
  inputIdEdit = NaN
  nomeEdit = '';
  idadeEdit = NaN;
  cargoEdit = '';

  editaFuncionario() {

    let form = document.getElementById('table-form')!
    if (form.style.display === 'block') {
      form.style.display = 'none'
    } else {
      form.style.display = 'block'
    }

    // Seleciona a tabela e as linhas da tabela
    let tabela = document.getElementById('tabela') as HTMLTableElement
    let tbody = tabela.querySelector('tbody')!
    let tr = tbody.querySelectorAll('tr')

    for (var j = 0; j < tr.length; j++) {
      tr[j].id = `linha${j}`
      let linha = document.getElementById(`linha${j}`) as HTMLTableRowElement
    }

    for (var i = 0; i < tr.length; i++) {
      if (this.nomeEdit == '') {
        console.log('Campo "nome" vazio, nenhuma alteração foi feita');
      } else {
        this.Funcionarios[i].nome = this.nomeEdit;
      }
      if (isNaN(this.idadeEdit)) {
        console.log('Campo "idade" vazio, nenhuma alteração foi feita');
      } else {
        this.Funcionarios[i].idade = this.idadeEdit
      }
      if (this.cargoEdit == '') {
        console.log('Campo "cargo" vazio, nenhuma alteração foi feita')
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


