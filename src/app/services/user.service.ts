import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from '@app/mocks';
import { UserJsonData, UserDataMappedResult } from '@app/types';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getMappedUserData(): Observable<UserDataMappedResult> {
    return this.getUserData().pipe(
      map(result => this.mapUserDataResult(result)),
      catchError((err) => of({ links: [], users: [] } as UserDataMappedResult))
    )
  }

  private getUserData(): Observable<UserJsonData[]>{
    return of(UserData);
  }

  private mapUserDataResult(data: UserJsonData[]): UserDataMappedResult {
    return data.reduce((acc, item) => {
      if (item && item.type === 'user_node') {
        acc.users.push({
          userId: item.userId || null,
          name: item.name || ''
        });
      }

      if (item && item.type === 'user_to_user_link') {
        acc.links.push({
          node1: item.node1 || null,
          node2: item.node2 || null
        });
      }

      return acc;

    }, {
      users: [],
      links: []
    } as UserDataMappedResult)
  }
}
