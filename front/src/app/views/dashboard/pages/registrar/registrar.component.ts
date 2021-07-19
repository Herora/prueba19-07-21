import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  constructor(private servicios: HttpService, private router: Router) { }

  ngOnInit(): void {

  }
  public createUser(event: any): void {
    this.servicios.CreateUser(event).subscribe((res: any) => {
      if (res.data) {
        this.router.navigate(['/dashboard/listar']);
      }
    },
    (resultError) => {
      if(resultError.error.data[0].message == "has already been taken"){
        alert("Este correo ya existe");
      }else{
        alert("Comuniquese con administración");
      }
    }
    );
  }
}
