import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dark-mode-toggle',
  imports: [ButtonModule, CommonModule],
  templateUrl: './dark-toggle.component.html',
})
export class DarkModeToggleComponent implements OnInit {
  public darkModeSet: string | null = localStorage.getItem('dark-mode');

  constructor() {}

  ngOnInit(): void {}

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (!element) return;
    element.classList.toggle('dark-mode');
    if (element.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.removeItem('dark-mode');
    }
    this.darkModeSet = localStorage.getItem('dark-mode');
  }
}
