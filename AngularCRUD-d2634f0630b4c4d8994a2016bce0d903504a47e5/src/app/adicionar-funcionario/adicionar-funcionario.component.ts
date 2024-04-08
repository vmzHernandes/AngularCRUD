import { Funcionario } from '../funcionario';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'adicionar-funcionario',
  standalone: true,
  imports: [CommonModule, HomeComponent, FormsModule],
  templateUrl: './adicionar-funcionario.component.html',
  styleUrl: './adicionar-funcionario.component.css',
})

export class AdicionarFuncionarioComponent {
  @Input() FuncionarioLista: Funcionario[] = [];


  // Referente às funções dentro da tabela
  // Exporta removeFuncionario() e editaFuncionario()
  @Output() onButtonClick = new EventEmitter<any>();
  removeFuncionario() { }
  editaFuncionario() { }


  // Modelo de funcionário
  // É uma função que retorna um objeto para que eu possa usar dentro da função addFuncionario()
  // Anteriormente, era um objeto, mas, ao dar submit no form, todos os 'novosFuncionarios' tinham suas informações substituidas
  novoFuncionario = () => {
    return {
      id: 0,
      nome: '',
      idade: 0,
      cargo:'',
    }
  }


  // Adiciona funcionário
  // No clique, adiciona um objeto no array chamado 'novoFuncionario' e mostra suas informações na tela
  inputNome = '';
  inputIdade = NaN;
  inputCargo = '';

  addFuncionario() {
    console.log('funcao adicionar clicada')

    // Ao criar um novoFunc chamando a função novoFuncionario, o erro não ocorre mais
    const novoFunc = this.novoFuncionario()
    novoFunc.id = Math.max.apply(null, this.FuncionarioLista.map(function (maxValue) { return maxValue.id; })) + 1;
    novoFunc.nome = this.inputNome;
    novoFunc.idade = this.inputIdade;
    novoFunc.cargo = this.inputCargo;

    // Adiciona novoFuncionario ao array de obj Funcionario[]
    this.FuncionarioLista.push(novoFunc);
    console.log(this.FuncionarioLista)
    console.log(novoFunc)
  }
}
