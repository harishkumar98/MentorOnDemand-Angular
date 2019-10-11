import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './loadingscreen.component.html',
  styles: []
})
export class LoadingscreenComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
    var getLoadData = JSON.parse(localStorage.getItem('loadData'));
    setTimeout(function() {
      window.location.pathname= getLoadData;
      localStorage.clear();
  }, 3000);
  };

}


