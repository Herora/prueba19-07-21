import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  public product : Iproduct;
  constructor(private route: ActivatedRoute,private servicios: HttpService, private router: Router) { }

  ngOnInit(): void {
    // let idUrl = this.route.snapshot.paramMap.get('id');
    //   this.servicios.getListUser().subscribe((res: any) => {
    //     this.product = res.find(x => x.id == idUrl) ;
    //   });
  }

}
export interface Iproduct {
  name: string;
  gender: string;
  email: string;
  status: string;
}