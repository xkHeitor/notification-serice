import { Notification } from '@app/entities/notification';

export interface NotificationViewModelType {
  id: string;
  content: string;
  category: string;
  recipientId: string;
}

export class NotificationViewModel {
  static toHTTP(notification: Notification): NotificationViewModelType {
    return {
      id: notification.id,
      content: notification.content,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
