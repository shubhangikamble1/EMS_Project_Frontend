import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:HttpClient) { }

  public getAllRating(){
    this.http.get("http://localhost:7079/ems/rating/get-all-rating")
  }
}
