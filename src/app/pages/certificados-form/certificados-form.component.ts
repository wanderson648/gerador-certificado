import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from '../../_components/secundary-button/secundary-button.component';


@Component({
  selector: 'app-certificados-form',
  standalone: true,
  imports: [PrimaryButtonComponent, SecundaryButtonComponent],
  templateUrl: './certificados-form.component.html',
  styleUrl: './certificados-form.component.css'
})
export class CertificadosFormComponent {

}
