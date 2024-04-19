import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from "@angular/common";
import {HomeComponent} from "./core/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demat-demande-app';

  enable = true;
  names: string[] = ['Harouna', 'Jules', 'Marie', 'Mariam'];
}
