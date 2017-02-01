import { LoginService } from './login.service';
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class MediaService {

  private url: string = 'http://media.mw.metropolia.fi/wbma';
    
  
  constructor(private http: Http, private loginService: LoginService) {
  }


  getMedia = () => {
    return this.http.get(this.url + '/media')
      .map(
        res =>
          res.json()
      );
  }

 postMedia = (formContent: any) => {
    // this.http.post(this.url, this.user,.....)
    return this.http.post(this.url +'/media?token=' + JSON.parse(localStorage.getItem("user")).token, formContent)
      .map(
        resp => {
          resp.json();
        },
        error => {
          console.log(error);
        }
      );
  };

}
