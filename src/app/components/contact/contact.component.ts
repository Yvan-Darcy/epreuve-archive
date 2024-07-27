import { Component } from '@angular/core';
import { FooterComponent } from '../../reusable/footer/footer.component';
import { NavbarComponent } from '../../reusable/navbar/navbar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
