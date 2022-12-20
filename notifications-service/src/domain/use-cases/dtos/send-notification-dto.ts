import { Notification } from "@entities/notification";

export interface SendNotificationResponse {
  notification: Notification 
}

export interface SendNotificationDTO {
  recipientId: string;
  content: string;
  category: string;
}