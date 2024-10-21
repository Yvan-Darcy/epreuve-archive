
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../reusable/footer/footer.component';
import { NavbarComponent } from '../../reusable/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { ApiService } from '../../services/api.services';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  userDetails = {
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  };

  isLoading = true;
  success = false;
  error = ""
  constructor(private apiService: ApiService) {}

  onSubmitEmail(): void {
    this.apiService.form('contact', 'POST', this.userDetails).subscribe(
      (response) => {
        this.isLoading = false;
        this.success = true;
        console.log("successfully sent an email")
        this.resetForm();
      },
      (error) => {
        this.isLoading = false;
        this.success = false;

        if (this.userDetails.first_name == "") {
          this.error = "Le nom ne doit pas être vide";
        } else if (this.userDetails.last_name == '') {
          this.error = 'Le prénom ne doit pas être vide';
        } else if (this.userDetails.email == '') {
          this.error = "Email ne doit pas être vide";
        } else if (this.userDetails.message == '') {
          this.error = 'message ne doit pas être vide';
        }
        else {
          this.error = "Un erreur inconnue était en place!"
        }
      }
    );
  }

  resetForm(): void {
    this.userDetails = {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
    };
  }
}
