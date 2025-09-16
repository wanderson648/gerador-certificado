import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from '../../_components/secundary-button/secundary-button.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interfaces/certificado';


@Component({
  selector: 'app-certificados-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecundaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificados-form.component.html',
  styleUrl: './certificados-form.component.css'
})
export class CertificadosFormComponent {

  certificado: Certificado = {
    atividades: [],
    nome: ''
  }

  atividade: string = '';

  campoInvalido(control: NgModel) {
    return control.invalid && control.touched;
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }

  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {
    if(!this.formValido()) {
      return;
    }
    console.log(this.certificado)
  }
}
