// Importaciones necesarias
import { Component, OnInit } from '@angular/core'; // Importa decorador Component y la interfaz OnInit
import { CommonModule } from '@angular/common'; // Importa CommonModule para directivas comunes de Angular
import { DataService } from '../../services/data.service'; // Importa el servicio de datos personalizado
import { catchError } from 'rxjs/operators'; // Importa operador catchError de RxJS para manejo de errores
import { of } from 'rxjs';
import { PostComponent } from "./post/post.component"; // Importa función 'of' de RxJS para crear observables

// Decorador del componente
@Component({
  selector: 'app-posts', // Selector del componente para uso en templates
  standalone: true, // Indica que es un componente standalone (nueva característica de Angular)
  imports: [CommonModule, PostComponent], // Importa CommonModule para uso en el template
  templateUrl: './posts.component.html', // Ruta al archivo de template HTML
  styleUrl: './posts.component.css' // Ruta al archivo de estilos CSS
})
export class PostsComponent implements OnInit {


  mensajes:any; // Propiedad para almacenar los posts, inicializada como array vacío //esto cambio respecto a la otra forma

  // Constructor del componente, inyecta el servicio DataService
  constructor(private dataService: DataService) {}

  // Método ngOnInit, se ejecuta al inicializar el componente
  ngOnInit() {
    this.mensajes = this.dataService.getPost(); // mucho mas corto, se usa en el html |async
    //la desventaja es que en consola no veo lo que obtengo, cosa que antes si. Hay una solucion
  }
}

  //ESTA FORMA DIFIERE EN EL USO DE MENSAJES Y PIPE
  /* mensajes: any[] = []; // Propiedad para almacenar los posts, inicializada como array vacío //esto cambia

  // Constructor del componente, inyecta el servicio DataService
  constructor(private dataService: DataService) {}

  // Método ngOnInit, se ejecuta al inicializar el componente
  ngOnInit() {
    this.dataService.getPost().pipe( // Llama al método getPost del servicio y aplica operadores con pipe //esto cambia
      catchError(error => { // Captura y maneja cualquier error que ocurra
        console.error('Error fetching posts:', error); // Registra el error en la consola
        return of([]); // Retorna un observable con un array vacío en caso de error
      })   
    ).subscribe( // Se suscribe al observable resultante
      (posts: any) => { // Función que se ejecuta cuando se reciben los posts exitosamente
        console.log(posts); // Registra los posts en la consola
        this.mensajes = posts; // Asigna los posts recibidos a la propiedad posts del componente
      }
    );
  }
} */



/* import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPost().subscribe(
      (posts: any) => {
        console.log(posts);
        this.posts = posts;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
} */