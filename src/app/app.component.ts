import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./_components/navbar/navbar.component";
import { BaseUiComponent } from "./_components/base-ui/base-ui.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BaseUiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';
}
