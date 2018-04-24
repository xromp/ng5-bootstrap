import { EventEmitter, Injectable, Component, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { 
  HTTP_INTERCEPTORS, 
  HttpClientModule, 
  HttpClient, 
  HttpEvent, 
  HttpInterceptor, 
  HttpHandler, 
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/throw';


@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {
  
  constructor(private loadingIndicatorService: LoadingIndicatorService) {}
  
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // emit onStarted event before request execution
    this.loadingIndicatorService.onStarted(req);
    
    return next
      .handle(req)
      // emit onFinished event after request execution
      .finally(() => this.loadingIndicatorService.onFinished(req));
  }
  
}

@Injectable()
export class LoadingIndicatorService {
  
  onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  /**
   * Stores all currently active requests
   */
  private requests: HttpRequest<any>[] = [];
  
  /**
   * Adds request to the storage and notifies observers
   */
  onStarted(req: HttpRequest<any>): void {
    this.requests.push(req);
    this.notify();
  }
  
  /**
   * Removes request from the storage and notifies observers
   */
  onFinished(req: HttpRequest<any>): void {
    const index = this.requests.indexOf(req);
    if (index !== -1) {
      this.requests.splice(index, 1);
    }
    this.notify();
  }
  
  /**
   * Notifies observers about whether there are any requests on fly
   */
  private notify(): void {
    this.onLoadingChanged.emit(this.requests.length !== 0);
  }
}