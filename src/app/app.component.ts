import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { SecundaryButtonComponent } from "./secundary-button/secundary-button.component";
import { ItemCertificadoComponent } from "./item-certificado/item-certificado.component";
import { BaseUiComponent } from "./base-ui/base-ui.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, PrimaryButtonComponent, SecundaryButtonComponent, ItemCertificadoComponent, BaseUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
}
