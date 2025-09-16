import { Component } from '@angular/core';
import { SecundaryButtonComponent } from "../secundary-button/secundary-button.component";
import { Router} from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecundaryButtonComponent],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
  id: string = '2';

  constructor(private router: Router) {}

  redirecionaCertificado() {
    this.router.navigate(['/certificados', 2]);
  }
}
