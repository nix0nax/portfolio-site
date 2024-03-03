import { Component, OnInit } from '@angular/core';
import { RedirectButtonComponent } from '../redirect-button/redirect-button.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RedirectButtonComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {
  ngOnInit(): void {
      
  }
}
