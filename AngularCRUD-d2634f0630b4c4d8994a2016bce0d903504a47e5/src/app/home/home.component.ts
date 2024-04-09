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
  removeFuncionario() {
    // TS não reconhece o tipo específico de elemento ao usar getElementById
    // Então adicionamos 'as HTMLTableElement' para dizer que é uma tabela
    let tabela = document.getElementById('tabela') as HTMLTableElement
    let tbody = tabela.querySelector('tbody')!
    let tr = tbody.querySelectorAll('tr')

    // Loop para percorrer a tabela de funcionarios
    for (var i = 0; i < this.Funcionarios.length; i++) {
      // Pega o conteudo da célula 0 (a célula do ID) de cada linha e converte pra number
      var celula = Number(tr[i].cells[0].innerHTML)

      // Remove o funcionário da db e, consequentemente, da tabela
      if (this.Funcionarios[i].id == celula) {
        this.Funcionarios.splice(i, 1)
        break
      }
    }
  }


  // *** ALTERAR DEPOIS ***
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

    for (var i = 0; i < this.Funcionarios.length; i++) {
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


