import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
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
    if (localStorage.getItem('dark-mode') === 'true') {
      document.querySelector('html')?.classList.toggle('dark-mode');
    }
  }
}
