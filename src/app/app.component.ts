import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav
  title = 'sidebar';

  constructor(private observer: BreakpointObserver){}

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 700px)'])
    .subscribe((res) => {
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
