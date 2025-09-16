import { Component } from '@angular/core';
import { ItemCertificadoComponent } from "../../_components/item-certificado/item-certificado.component";
import { RouterLink } from "@angular/router";
import { SecundaryButtonComponent } from '../../_components/secundary-button/secundary-button.component';

@Component({
  selector: 'app-certificados',
  imports: [RouterLink, SecundaryButtonComponent],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {

}
