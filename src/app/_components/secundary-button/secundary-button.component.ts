import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-secundary-button',
  imports: [CommonModule, RouterLink],
  templateUrl: './secundary-button.component.html',
  styleUrl: './secundary-button.component.css'
})
export class SecundaryButtonComponent {
  @Input() textoBotao: string = '';
  @Input() phClass: string = '';
  @Input() disabled: boolean = false;
}
