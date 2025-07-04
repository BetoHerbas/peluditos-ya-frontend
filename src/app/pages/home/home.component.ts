import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { Router } from '@angular/router'; // PASO 1: Importar Router

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  imagenes: string[] = [
    'https://patitasalrescateorg.netlify.app/img/PrimerFondo.jpg',
    'https://cdn.pixabay.com/photo/2022/06/29/14/03/puppy-7291850_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/02/08/16/09/dog-3139757_960_720.jpg', 
    'https://cdn.pixabay.com/photo/2020/10/06/11/50/dog-5632005_960_720.jpg',
  ];

  indiceImagenActual = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    setInterval(() => {
      this.indiceImagenActual =
        (this.indiceImagenActual + 1) % this.imagenes.length;
    }, 5000);
  }

  navegarAPeluditos() {
    this.router.navigate(['/adoption']);
  }

  navegarAComoAyudar() {
    this.router.navigate(['/como-ayudar']);
  }
}