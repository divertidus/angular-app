import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Input() mensaje: any;
  /*Creo un evento personalizado llamado clickPost de tipo nuevo EventEmitter*/
  @Output() clickPost = new EventEmitter<number> // opcional ese <number>, sino sería (),  es para indicar lo que tiene que mandar se conoce como generico;

  /* Creamos el evento de click, hay que decir en el html que <li (click)="onClick()"> para que funcione*/
  onClick() {
    /*Esto era para sacarlo por consola, lo comentaré porque queremos mandarlo al padre ahora*/
    // console.log(this.mensaje.id);

    /*Lo que vaya en el parentesis será lo que se envíe al padre*/ 
    this.clickPost.emit(this.mensaje.id);
  }



}
