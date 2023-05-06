import { Component } from '@angular/core';

// Decorators are typescript features that basically enhance JS classes.
// Decorators are always attached by adding '@' sign before them.
// Date - 02nd May, 2023.
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline'

    getServerStatus() {
        return this.serverStatus;
    }
}