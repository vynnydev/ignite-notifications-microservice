import { CreateNotificationBody } from "@presentation/controllers/dtos/create-notification-body";

export type SendNotificationControllerResponse = { 
  notification: { 
    id: string; 
    content: string; 
    category: string; 
    recipientId: string; 
  }; 
}

export abstract class AbstractSendNotificationController {
  abstract handle(body: CreateNotificationBody): Promise<SendNotificationControllerResponse>;
}