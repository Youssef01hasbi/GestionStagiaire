import {Component, OnInit} from '@angular/core';
import {PostulezService} from "../../service/Postulez/postulez.service";

@Component({
  selector: 'app-all-postuler',
  templateUrl: './all-postuler.component.html',
  styleUrls: ['./all-postuler.component.css']
})
export class AllPostulerComponent implements OnInit{

  postulations: any[] = [];
  deleteId: number | null = null;

  constructor(private postulezService:PostulezService) { }

  ngOnInit(): void {
    this.getAllPostulez();
  }

  getAllPostulez() {
    this.postulezService.getAllPostulez().subscribe((data: any) => {
      this.postulations = data;
    }
    );
  }

  setDeleteId(id: number) {
    this.deleteId = id;
  }


  onCancelPostuler() {
    if (this.deleteId !== null) {
      this.postulezService.CancelPostuler(this.deleteId).subscribe(() => {
        this.getAllPostulez();
      });
    }
  }

  setValider(id:any) {
    if(id!=null){
      this.postulezService.validerPostulez(id).subscribe(()=>{
        this.getAllPostulez();
      })
    }
  }
}
