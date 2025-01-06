import {Component, Input} from '@angular/core';
import {MenuServiceService} from "../sevices/menu-service.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() menu: any;
  constructor(private service: MenuServiceService) {
}
  reserver(id:any) {
    this.service.getMenuById(id).subscribe(res=>{
      this.service.updateMenu(res.id,{ id:res.id,title:res.title,description:res.description,mark: res.mark,approved:res.approved,reservations:222 }).subscribe(resultat=>{
        console.log("resultat final",resultat)
      })
    })

  }
}
