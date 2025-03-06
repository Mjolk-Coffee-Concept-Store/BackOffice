import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
import { DarkModeToggleComponent } from './components/DarkModeToggle/dark-toggle.component';

@Component({
  selector: 'app-root',
  imports: [DarkModeToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = environment.apiUrl;

  constructor(private primeng: PrimeNG) {}

  ngOnInit(): void {
    this.primeng.ripple.set(true);
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (!element) return;
    element.classList.toggle('dark-mode');
  }
}
