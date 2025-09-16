import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from '../../_components/secundary-button/secundary-button.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-certificados-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecundaryButtonComponent, FormsModule],
  templateUrl: './certificados-form.component.html',
  styleUrl: './certificados-form.component.css'
})
export class CertificadosFormComponent {

  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['Angular', 'React', 'Vue'];
}
