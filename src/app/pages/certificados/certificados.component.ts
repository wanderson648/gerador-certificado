import { CertificadoService } from './../../_services/certificado.service';
import { Component, OnInit } from '@angular/core';
import { ItemCertificadoComponent } from "../../_components/item-certificado/item-certificado.component";
import { Certificado } from '../../interfaces/certificado';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [ItemCertificadoComponent, SecundaryButtonComponent, RouterLink],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent implements OnInit {
  certificados: Certificado[] = [];

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados;
    console.log(this.certificados);
  }
}
