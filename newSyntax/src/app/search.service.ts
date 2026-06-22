import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  private http = inject(HttpClient)

  apiurl = 'https://api.github.com/search/users?q='

  getUserInfoList(kw:string | undefined):Observable<User[]>{
    return this.http.get<any>(`${this.apiurl}${kw}`).pipe(
      map((data)=> data.items),
      map((items)=>{
        return items.map((user:any)=>{
          return {
            id:user.id,
            login:user.login,
            url:user.url
          }
        })
      })
      
    )
  }
}
