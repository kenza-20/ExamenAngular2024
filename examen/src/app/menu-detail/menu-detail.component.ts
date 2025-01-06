import { Component } from '@angular/core';
import {MenuServiceService} from "../sevices/menu-service.service";
import {ActivatedRoute} from "@angular/router";
import {Menu} from "../model/menu";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent {
 detailsinformatons: any;
   msgerreur: any;
   msg: any;
   sup:any
  formNote: any;

  constructor(private service: MenuServiceService,
              private ac: ActivatedRoute,
              private formBuilder: FormBuilder,) {}

  ngOnInit(){
    this.service.getMenuById(this.ac.snapshot.params['id']).subscribe(
      d=>{
        this.detailsinformatons=d;
        console.log(this.detailsinformatons);

        if(this.detailsinformatons.mark==0){
          this.msgerreur=" Aucune note n’est attribuée à ce menu"
          this.sup=false;
        }
        else {
          this.msg = this.detailsinformatons.mark;
          this.sup = true;
        }
      }
    )
    this.initForm()
  }

  initForm(): void {
    this.formNote = this.formBuilder.group({
      note: ["", [Validators.pattern(/[1,2,3,4,5]/)]],
    })
  }


  update(id:any, f:any): void {
    this.service.getMenuById(id).subscribe(res=>{
      console.log("resultat",res)
      console.log("mark",res.mark)

      if(res.mark==0){
        res.mark=f.note;
      }
      else
        res.mark=(res.mark+f.note)/2
      this.service.updateMenu(res.id,{ id:res.id,title:res.title,description:res.description,mark: res.mark,approved:res.approved,reservations:res.reservations }).subscribe(resultat=>{
        console.log("resultat final",resultat)
      })
    })
  }
}
