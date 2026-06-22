import { Component, computed, effect, inject, input } from '@angular/core';
import { SearchService } from '../search.service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-display',
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent {

  constructor(){
    effect(()=>{
      console.log(`in child component it show ${this.searchInput()}`)
    })
        effect(()=>{
      console.log(this.userList())
    })
  }
  

  private searchService = inject(SearchService)
  searchInput = input<string | undefined>()
  userListResource = rxResource({
    request: () => this.searchInput(),
    loader: ({request:term})=> this.searchService.getUserInfoList(term)
  })
  userList = this.userListResource.value

}
