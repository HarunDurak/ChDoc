import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() array : any [] = [];
  @Output() searchEvent:EventEmitter<any>=new EventEmitter<any>();

  searchEvent1(event:any){
   this.searchEvent.emit()
  }

  logOut(){
    console.log('Çıkış yapıldı.');
  }

}
