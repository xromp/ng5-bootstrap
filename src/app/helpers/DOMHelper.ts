import { Component, AfterViewInit, OnInit } from '@angular/core';

export class DOMHelper implements OnInit{
    
    ngOnInit(){
        console.log("Dom helper OnInit");
    }

    ngAfterViewInit(){
        console.log("Dom helper afterinit");
    }

}