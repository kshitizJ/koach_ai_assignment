import { Component } from '@angular/core';
import { JsonApiService } from '../json-api.service';

@Component({
  selector: 'app-retrieve-json',
  templateUrl: './retrieve-json.component.html'
})
export class RetrieveJsonComponent {
  retrieveResponse: any;

  constructor(private apiService: JsonApiService) { }

  async retrieveData() {
    await this.apiService.retrieveJson().subscribe(
      {
        next: (res) => {
          this.retrieveResponse = res;
        },
        error: (err) => {
          this.retrieveResponse = 'Error retrieving data';
        }
      }
    );
  }
}
