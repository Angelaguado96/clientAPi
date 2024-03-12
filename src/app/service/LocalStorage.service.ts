import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {
   
    constructor() { }
    setItem(key:string,value:any):void{
        localStorage.setItem(key,JSON.stringify(value))
    }
    getItem(key: string): any {
        const item = localStorage.getItem(key);
        console.log(item)
        try {
          return item ? JSON.parse(item) : null;
        } catch (error) {
          return console.error('Error al parsear el valor del LocalStorage:', error);
          
        }
    }      

    clearLocalStorage(): void {
        localStorage.clear();
    }
}
