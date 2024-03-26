import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LocalStorageService {
   
    constructor() { }

    setItem( value: any): void {
        localStorage.setItem('userdata', JSON.stringify(value));
    }

    getItem(): any {
        const item: string | null = localStorage.getItem('userdata');
        if (item !== null) {
            return JSON.parse(item);
        } else {
            console.log('No se encontró ningún valor almacenado con la clave especificada.');
            return null; 
        }
    }      

    clearLocalStorage(): void {
        localStorage.clear();
    }
}
