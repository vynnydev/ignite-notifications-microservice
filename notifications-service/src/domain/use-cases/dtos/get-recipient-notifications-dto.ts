import { Notification } from "@entities/notification";

export interface GetRecipientNotificationsRequest {
  recipientId: string;
}

export interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}