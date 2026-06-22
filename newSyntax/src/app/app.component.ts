import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchFilterComponent } from "./search-filter/search-filter.component";
import { DisplayComponent } from "./display/display.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchFilterComponent, DisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'newSyntax';

  constructor(){
    effect(()=>{
      console.log(`in parent file, it shows ${this.searchInput()}`)
    })
  }

  searchInput = signal('')
  
  handleInputChange(input:string){
    this.searchInput.set(input);
  }
}
