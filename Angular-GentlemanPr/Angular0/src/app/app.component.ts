// Imports importantes
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// TUTORIAL GOOGLE ANGULAR
import { HomeComponent } from './home/home.component';

// Se define el componente
@Component({
  // Codigo del componente (Elemento seleccionado)
  selector: 'app-root',
  standalone: true, // ...

  // TUTORIAL
  imports: [HomeComponent],

  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `, // Plantilla HTML  para el componente
  styleUrl: './app.component.css' // Plantilla CSS para el componente
})
export class AppComponent {
  title = 'homes';
}
