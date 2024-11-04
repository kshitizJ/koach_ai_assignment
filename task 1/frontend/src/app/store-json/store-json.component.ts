import { Component } from '@angular/core';
import { JsonApiService } from '../json-api.service';

@Component({
  selector: 'app-store-json',
  templateUrl: './store-json.component.html'
})
export class StoreJsonComponent {
  jsonData: string = '';
  storeResponse: string = '';

  constructor(private apiService: JsonApiService) { }

  async storeData() {
    try {
      const data = JSON.parse(this.jsonData);
      await this.apiService.storeJson(data).subscribe(
        {
          next: (res) => {
            this.storeResponse = `Stored Successfully! ETag: ${res.e_tag}, Link: ${res.url}`;
          },
          error: (err) => {
            console.log('error', err)
          }
        }
      );
    } catch (error) {
      this.storeResponse = 'Invalid JSON format';
    }
  }
}
