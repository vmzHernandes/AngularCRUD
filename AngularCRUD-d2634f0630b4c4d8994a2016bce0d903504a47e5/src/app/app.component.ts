import { Component } from '@angular/core';
import { AdicionarFuncionarioComponent } from './adicionar-funcionario/adicionar-funcionario.component';
import { HomeComponent } from './home/home.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { RemoverFuncionarioComponent } from './remover-funcionario/remover-funcionario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AdicionarFuncionarioComponent, HomeComponent, EditarFuncionarioComponent, RemoverFuncionarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'Angular CRUD';
}
