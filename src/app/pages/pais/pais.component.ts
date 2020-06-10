import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from 'src/app/interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais: Pais; // declarado sin inicializar

  constructor(
    public paisesService: PaisesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.paisesService.getPaisPorId(id).then((pais: Pais) => {

      if (pais === undefined) {
        return this.router.navigateByUrl('/');
      }

      this.pais = pais;
      console.log(pais);

    });
  }

}
