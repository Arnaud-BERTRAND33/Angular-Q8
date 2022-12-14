import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Q8-Angular';

  constructor() {}

  onomatopiaList: string[] = [];

  onReceiveNewOnomatopia(event: string): void{
    this.onomatopiaList.push(event);
  }
}
