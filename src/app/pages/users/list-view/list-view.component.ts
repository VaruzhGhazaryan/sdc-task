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

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListViewComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<U2ULink>([]);

  @Input() userEntities!: Dictionary<User> | null;

  @Input() set links(data: U2ULink[] | null) {
    if (data) {
      this.dataSource.data = data;
    }
  };

  @ViewChild(MatSort) sort!: MatSort;


  displayedColumns: string[] = [
    'number',
    'name1',
    'name2',
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
}
