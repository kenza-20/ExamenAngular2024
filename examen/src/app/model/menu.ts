import {mark} from "@angular/compiler-cli/src/ngtsc/perf/src/clock";

export class Menu{
  id:string;
  title: string;
  image: string;
  description: string;
  mark:number;
  approved  : boolean;
  reservations : number [];


  constructor(id: string, title: string, image: string, description: string, mark: number, approved: boolean, reservations: number[]) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.mark = mark;
    this.approved = approved;
    this.reservations = reservations;
  }
}
