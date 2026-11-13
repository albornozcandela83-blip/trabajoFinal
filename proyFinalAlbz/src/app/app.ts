import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet} from '@angular/router';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [RouterOutlet,FormsModule, Footer, Navbar],
  selector: 'app-root',
  standalone:true,
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {

}
