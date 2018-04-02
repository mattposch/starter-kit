import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface IMailService {
  sendActivationMail(name: string, email: string, activationToken: string): void;
}

export interface IRawMailDataModel {
  to: string;
  subject: string;
  html: string;
}

export interface IMailResponse {
  id: string;
  message: string;
}

@Injectable()
export class MailService {

  private _client: any;
  private _from: any;

  constructor(
    private http: HttpClient
  ) {
  }

  public send(mailData: IRawMailDataModel) {
    console.log('send');
  }

  public sendWithTemplate(
      data: { actionUrl: string, recipient: { email: string, name: string },
          templateId: string,
          userAgent: { browser: string, os: string }
      }
  ) {
    console.log('sendWithTemplate');
  }

}
