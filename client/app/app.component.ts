import { Component } from '@angular/core';
import {TodoComponent} from './components/todo.component';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [TodoComponent]
})
export class AppComponent { }
