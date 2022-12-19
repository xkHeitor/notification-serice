import { Notification } from '@app/entities/notification';

interface PrismaNotification {
  id: string;
  category: string;
  content: string;
  recipientId: string;
  readAt: Date | null | undefined;
  createdAt: Date;
}

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification): PrismaNotification {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
