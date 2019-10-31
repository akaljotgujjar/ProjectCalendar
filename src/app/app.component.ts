import { Component } from '@angular/core';
import { View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  template: '<ejs-schedule height="850" width="1250" [currentView]="setView"></ejs-schedule>',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectCalendar';
  public setView: View = 'Month';
}
