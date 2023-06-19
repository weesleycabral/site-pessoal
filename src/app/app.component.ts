import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  setMode = false;

  receiveMode($event) {
    this.setMode = $event;
    console.log("MODEEEE", this.setMode);
  }
}
