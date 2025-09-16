import { routes } from './../../app.routes';
import { CertificadoService } from './../../_services/certificado.service';
import { Component, OnInit } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Certificado } from '../../interfaces/certificado';

@Component({
  selector: 'app-certificado',
  imports: [SecundaryButtonComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.css'
})
export class CertificadoComponent implements OnInit {

  id: string | null = null;
  certificado: Certificado | undefined;

  constructor(private CertificadoService: CertificadoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.certificado = this.CertificadoService.certificados.find((item) => item.id == this.id);
    })
    console.log(this.certificado);
  }

}
