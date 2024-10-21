import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../reusable/navbar/navbar.component';
import { FooterComponent } from '../../reusable/footer/footer.component';
import { ApiService } from '../../services/api.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.log('Error fetching data', error);
      }
    );
  }
  sendData(): void{
    const payload = {
      grade: '3',
      course: 'Burundi is the best country',
      section: 'Langues',
    };
    this.apiService.postData(payload).subscribe(
      (response) => {
        console.log('Data posted successfully', response);
      },
      (error) => {
        console.error('Error posting data', error);
      }
    );
  }
}
