import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultComponent } from './components/layouts/default/default.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefaultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'I\'m literally just a girl!';
}
