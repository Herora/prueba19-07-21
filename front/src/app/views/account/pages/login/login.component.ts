import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario: string;

  constructor(private router: Router, private servicios: HttpService) { }

  ngOnInit(): void {
    // console.log("ENTRO LISTAR");
  }

  public login() {
    this.servicios.login(this.usuario).subscribe((res: any) => {
      if (res.data[0].status === 'active') {
        this.router.navigate(['/dashboard/listar']);
      } else {
        alert("Comuniquese con administración");
      }
    });
  }
}
