import { Component } from '@angular/core';
import {MenuServiceService} from "../sevices/menu-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  list:any[]=[]
  listApproved:any[]=[]
  constructor(private service: MenuServiceService) {}

  ngOnInit(){
    this.getList()
  }
  getList(){
    this.service.getListMenuFromBack().subscribe(res=>{
      this.list=res;
      for(let i=0; i<this.list.length; i++){
        if(this.list[i].approved === true){
          this.listApproved.push(this.list[i]);
        }
      }
    })


  }

}
