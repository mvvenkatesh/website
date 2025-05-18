import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DetailsComponent } from "./details/details.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [DetailsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Website';
}
