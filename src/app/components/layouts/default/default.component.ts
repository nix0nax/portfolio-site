import { Component } from '@angular/core';

import { NavigationComponent } from '../../navigation/navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [NavigationComponent, RouterOutlet],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {

}
