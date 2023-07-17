import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MolHttpClientErrorService } from './mol-http-client-error.service';

@Injectable({
  providedIn: 'root'
})
export class MolHttpClientService {

  constructor(private client:HttpClient, private errorService:MolHttpClientErrorService) 
  { 
    
  }



}
