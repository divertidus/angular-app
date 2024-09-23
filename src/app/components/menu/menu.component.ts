import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsComponent } from "../../pages/posts/posts.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, CommonModule, PostsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  rutas = [
    { path: '/home', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/posts', name: 'Posts' },
  ];
}
