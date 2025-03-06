import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dark-mode-toggle',
  imports: [ButtonModule, CommonModule],
  templateUrl: './dark-toggle.component.html',
})
export class DarkModeToggleComponent {
  public darkModeSet: string | null = localStorage.getItem('dark-mode');

  constructor() {}

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (!element) return;
    element.classList.toggle('dark-mode');

    this.darkModeSet = this.darkModeSet === 'true' ? null : 'true';
    localStorage.setItem('dark-mode', this.darkModeSet || '');
  }
}
