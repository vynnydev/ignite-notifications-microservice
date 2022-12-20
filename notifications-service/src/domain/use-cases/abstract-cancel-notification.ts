import { CancelNotificationResponse, CancelNotificationRequest } from "./dtos/cancel-notification-dto";

export abstract class AbstractCancelNotification {
  abstract cancel(request: CancelNotificationRequest): Promise<CancelNotificationResponse>;
}