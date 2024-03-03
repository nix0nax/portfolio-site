import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.css'
})
export class TextboxComponent implements OnInit {
  @Input() textContent: string = "";

  ngOnInit(): void {
      
  }
}
