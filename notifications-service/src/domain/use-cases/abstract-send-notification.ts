import { SendNotificationDTO, SendNotificationResponse } from "./dtos/send-notification-dto";

export abstract class AbstractSendNotification {
  abstract send(request: SendNotificationDTO): Promise<SendNotificationResponse>;
}