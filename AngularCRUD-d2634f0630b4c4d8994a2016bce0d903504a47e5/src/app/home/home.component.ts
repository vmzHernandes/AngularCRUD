import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Funcionario } from '../funcionario';
import { AdicionarFuncionarioComponent } from '../adicionar-funcionario/adicionar-funcionario.component';
import { EditarFuncionarioComponent } from '../editar-funcionario/editar-funcionario.component';
import { RemoverFuncionarioComponent } from '../remover-funcionario/remover-funcionario.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, AdicionarFuncionarioComponent, EditarFuncionarioComponent, RemoverFuncionarioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  // Base de dados
    FuncionarioLista: Funcionario[] = [
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


  // Recebe a função declarada no parent
  @Input() onButtonClick: any;
  removeFuncionario() {
    console.log('remove na tabelaclicado')
    // Seleciona a tabela e as linhas da tabela
    const tabela = document.getElementById('tabela')
    const linhas = tabela?.getElementsByTagName('tr')

    // Loop para percorrer as linhas e atribuir IDs
    for (var i = 0; i < this.FuncionarioLista.length - 1; i++) {
      // Para cada iteração, a linha é a linha atual da iteração
      let linha = linhas![i];
      // Atribui ID para a linha de acordo com o id do funcionario na base de dados
      linha.id = `${this.FuncionarioLista[i].id}`

      // Remove o funcionário da db e, consequentemente, da tabela
      if (this.FuncionarioLista[i].id == Number(linha.id)) {
        let remover = this.FuncionarioLista.splice(i, 1)
        break
      }
    }
  }


  // *** ALTERAR DEPOIS ***
  editaFuncionario() {
    // Seleciona a tabela e as linhas da tabela
    const tabela = document.getElementById('tabela')
    const linhas = tabela?.getElementsByTagName('tr')

    // Loop para percorrer as linhas e atribuir IDs
    for (var i = 0; i < this.FuncionarioLista.length; i++) {
      // Para cada iteração, a linha é a linha atual da iteração
      let linha = linhas![i];
      // Atribui ID para a linha de acordo com o id do funcionario na base de dados
      linha.id = `${this.FuncionarioLista[i].id}`
      console.log(`id da linha ${i}: ${linha.id}`)
    }
  }
}


