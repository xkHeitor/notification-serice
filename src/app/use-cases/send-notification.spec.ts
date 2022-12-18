import { InMemoryNotifications } from '@test/repositories/in-memory/notifications-repository';
import { Notification } from './../entities/notification';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  let notificationRepository: InMemoryNotifications;
  const propsNotification = {
    recipientId: 'randomUUID',
    content: 'new notification',
    category: 'social',
  };

  beforeEach(() => {
    notificationRepository = new InMemoryNotifications();
  });

  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);
    const { notification } = await sendNotification.execute(propsNotification);

    expect(notification instanceof Notification).toBeTruthy();
    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
