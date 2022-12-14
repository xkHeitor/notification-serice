import { HttpModule } from './http.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MailService } from './mail/mail.service';
import { PostMakMailService } from './mail/post-mak-mail.service';
import { SMTPMailService } from './mail/smtp-mail.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: PostMakMailService,
    },
  ],
})
export class AppModule {}
