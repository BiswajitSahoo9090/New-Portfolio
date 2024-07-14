import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './portfolio-website/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './portfolio-website/about/about.component';
import { ContactComponent } from './portfolio-website/contact/contact.component';
import { FooterComponent } from './portfolio-website/footer/footer.component';
import { HomeComponent } from './portfolio-website/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutComponent,ContactComponent,FooterComponent,HomeComponent,NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
