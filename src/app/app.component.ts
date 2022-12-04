import { Component } from '@angular/core';

export interface book{
  pages: Int16Array,
  tittle : string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';

books = [{

}]

}
