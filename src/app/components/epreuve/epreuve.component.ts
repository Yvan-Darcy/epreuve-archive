import { response } from 'express';
import { ApiService } from './../../services/api.services';
import { Component, OnInit } from '@angular/core';

import { FooterComponent } from '../../reusable/footer/footer.component';
import { NavbarComponent } from '../../reusable/navbar/navbar.component';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-epreuve',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, CommonModule],
  templateUrl: './epreuve.component.html',
  styleUrl: './epreuve.component.scss',
})
export class EpreuveComponent implements OnInit {
  data: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.form('test', 'GET', '').subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
