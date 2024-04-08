import { Funcionario } from '../funcionario';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-adicionar-funcionario',
  standalone: true,
  imports: [CommonModule, HomeComponent, FormsModule],
  templateUrl: './adicionar-funcionario.component.html',
  styleUrl: './adicionar-funcionario.component.css',
})

export class AdicionarFuncionarioComponent {
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


  @Input() FuncionarioLista: Funcionario[] = [];
  // Adiciona funcionário
  // No clique, adiciona um objeto no array chamado 'novoFuncionario' e mostra suas informações na tela
  inputNomeAdd = '';
  inputIdadeAdd = NaN;
  inputCargoAdd = '';

  addFuncionario() {
    const novoFunc = this.novoFuncionario()
    novoFunc.id = Math.max.apply(null, this.FuncionarioLista.map(function (maxValue) { return maxValue.id; })) + 1;
    novoFunc.nome = this.inputNomeAdd;
    novoFunc.idade = this.inputIdadeAdd;
    novoFunc.cargo = this.inputCargoAdd;

    // Adiciona novoFuncionario ao array de obj Funcionario[]
    this.FuncionarioLista.push(novoFunc);
  }
}
