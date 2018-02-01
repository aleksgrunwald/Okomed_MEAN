import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from "rxjs"
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

@Injectable()
export class MessageService {

    constructor(private http: Http) {}

    addNewMessageToMESSAGES(message): Observable<any> {
        // console.log(message)
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })

        return this.http.post('http://localhost:3000/messages', message, options)
            .map((response: Response) => {
                return response.json()
            }).catch(this.handlePostError)
    }


    makeGetRequest(): Observable<any> {
        return this.http.get('http://localhost:3000/messages').
            map((response: Response) => {
                return response.json()
            }).catch(this.handleGetError)
    }

    private handlePostError(error: Response) {
        console.log("Cannot POST new message.")
        return Observable.throw(error.status)
    }

    private handleGetError(error: Response) {
        console.log("Cannot GET messages.")
        return Observable.throw(error.status)
    }



}