import { Notification } from './notification';
import { Content } from './content';

describe('Notification', () => {
  const propsNotification = {
    recipientId: 'randomUUID',
    content: new Content('new notification'),
    category: 'social',
    readAt: null,
  };

  it('should be able to create a notification', () => {
    const notification: Notification = new Notification(propsNotification);
    expect(notification).toBeTruthy();
  });
});
