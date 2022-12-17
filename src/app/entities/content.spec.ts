import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content: Content = new Content('New notification');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('New')).toThrow();
  });

  it('should not be able to create a notification content with more than 255 characters', () => {
    expect(() => new Content('.'.repeat(255))).toThrow();
  });
});
