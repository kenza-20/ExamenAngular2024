import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Menu} from "../model/menu";
import {MenuServiceService} from "../sevices/menu-service.service";

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent {
  formAddMenu: any;
  list: any = [];
  constructor(private formBuilder: FormBuilder,
              private service:MenuServiceService) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.formAddMenu = this.formBuilder.group({
      titre: ["", [Validators.required]],
      desc: ["", [Validators.required,Validators.minLength(10)]],

    })
  }

  ajouter(f: any): void {
    const m=new Menu(
      "3",
      f.titre,
      "",
      f.desc,
      0,
      false,
      []
    );
    this.list.push(m);
    console.log(this.list);
    this.service.addMenu(m).subscribe(res => console.log("added"));

  }
}
