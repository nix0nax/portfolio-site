import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-redirect-button',
  standalone: true,
  imports: [],
  templateUrl: './redirect-button.component.html',
  styleUrl: './redirect-button.component.css'
})
export class RedirectButtonComponent implements OnInit{

  @Input() text: string = "";
  @Input() redirectLink: string = "";

  ngOnInit(): void {
      
  }
}
