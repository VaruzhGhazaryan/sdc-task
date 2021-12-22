import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild
} from '@angular/core';
import { U2ULink, User } from "@app/types";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { Dictionary } from "@ngrx/entity";
import { FilterEvent } from '@app/pages/users/types';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<U2ULink>([]);

  @Input() userEntities!: Dictionary<User>;

  @Input() set links(data: U2ULink[] | null) {
    if (data) {
      this.dataSource.data = data;
    }
  };

  @Input() set filters(value: FilterEvent | null) {
    if (value && this.dataSource) {
      this.dataSource.filter = value.filter
        ? value.filter.trim().toLowerCase()
        : '';
    }
  }

  @ViewChild(MatSort) sort!: MatSort;


  displayedColumns: string[] = [
    'number',
    'name1',
    'name2',
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;

    /**
     * Custom filter predicate function which filter links by typed username.
     * @param data
     * @param filter
     */
    this.dataSource.filterPredicate = (data: U2ULink, filter: string): boolean => {
      if (this.userEntities) {
        let filteredUsers = Object.keys(this.userEntities)
          .filter(key => this.userEntities[key] && this.userEntities[key].name === filter)
          .map(key => this.userEntities[key]);

        return filteredUsers.some(user =>
          user.userId === data.node1 || user.userId === data.node2
        )
      }

      return true
    };
  }
}
