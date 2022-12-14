import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class PostMakMailService implements MailService {
  sendEmail(): string {
    return 'send PostMak';
  }
}
