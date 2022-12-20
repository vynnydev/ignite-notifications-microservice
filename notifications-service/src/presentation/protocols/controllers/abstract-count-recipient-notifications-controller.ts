export interface CountRecipientNotificationControllerResponse {
  count: number;
}

export abstract class AbstractCountRecipientNotificationController {
  abstract handle(recipientId: string): Promise<CountRecipientNotificationControllerResponse>;
}