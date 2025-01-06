import { Component } from '@angular/core';
import {MenuServiceService} from "../sevices/menu-service.service";

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent {
  list:any[]=[]
  constructor(private service: MenuServiceService) {}

  ngOnInit(){
    this.service.getListMenuFromBack().subscribe(menu => {
      menu.forEach(item => {
        if (item.reservations.includes(222)) {
          this.list.push(item);
        }
      });
      console.log(this.list);
    });

  }

}
