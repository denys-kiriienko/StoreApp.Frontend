import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'shop-client';
  constructor(private readonly themeService: ThemeService) {}

  onToggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
