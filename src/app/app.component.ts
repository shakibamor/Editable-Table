import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editField: string;
  tableList: Array<any> = [
    { id: 1, state: 'CA', city: 'ALBANY', county: 'ALAMEDA', taxRate: '9.75', expiration: '12/31/9999' },
    { id: 2, state: 'CA', city: 'HAYWARD', county: 'ALAMEDA', taxRate: '9.75', expiration: '12/31/9999' },
    { id: 3, state: 'CA', city: 'NEWARK', county: 'ALAMEDA', taxRate: '9.75', expiration: '12/31/9999' },
    { id: 4, state: 'CA', city: 'SAN LEANARD', county: 'ALAMEDA', taxRate: '9.75', expiration: '12/31/9999' },
    { id: 5, state: 'CA', city: 'UNION CITY', county: 'ALAMEDA', taxRate: '9.75', expiration: '12/31/9999' },
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.tableList[id][property] = editField;
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
