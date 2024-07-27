import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  CurrentYear: number;

  constructor(){
    this.CurrentYear = new Date().getFullYear();
  }
  

}
