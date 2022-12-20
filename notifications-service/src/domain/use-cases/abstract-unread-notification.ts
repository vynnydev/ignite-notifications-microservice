import { UnreadNotificationRequest, UnreadNotificationResponse } from "./dtos/unread-notification-dto";

export abstract class AbstractUnreadNotification {
  abstract unread(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse>;
}