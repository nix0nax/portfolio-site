import { Component } from '@angular/core';
import { TextboxComponent } from '../../textbox/textbox.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TextboxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
