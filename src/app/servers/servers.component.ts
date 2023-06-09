import { Component } from '@angular/core';

@Component({
  // Date - 02nd May, 2023.
  selector: 'app-servers', // selector using tag.
  // selector: '[app-servers]', // selector using attribute.
  // selector: '.app-servers', // selector using class.
  templateUrl: './servers.component.html',
  // template: `<h4>Components Section : </h4>
  //           <app-server />
  //           <app-server />`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Rushank Deepak Shinde';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log(`inside constructor. ${this.allowNewServer}`);
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
