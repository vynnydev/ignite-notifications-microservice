import { ReadNotificationRequest, ReadNotificationResponse } from "./dtos/read-notification-dto";

export abstract class AbstractReadNotifications {
  abstract read(request: ReadNotificationRequest): Promise<ReadNotificationResponse>;
}