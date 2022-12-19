import { SendNotification } from '@app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  NotificationViewModel,
  NotificationViewModelType,
} from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async createNotification(
    @Body() body: CreateNotificationBody,
  ): Promise<{ notification: NotificationViewModelType }> {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return { notification: NotificationViewModel.toHTTP(notification) };
  }
}
