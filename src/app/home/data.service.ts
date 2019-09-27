import { Injectable } from '@angular/core';


import { Observable, Subject, BehaviorSubject } from 'rxjs';



@Injectable(

)
export class DataService {

    public subject = new BehaviorSubject<any>(null);

    sendMessage(message: string) {

        // console.log(message)
        this.subject.next({ text: message });
    }

    clearMessages() {
        this.subject.next(null);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    constructor() { }


}