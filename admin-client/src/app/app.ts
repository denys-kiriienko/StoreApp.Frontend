import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'admin-client';
  
  sidebarIsOpen = false;

  onSidebarToggle(isOpen: boolean) {
    this.sidebarIsOpen = isOpen;
  }
}
