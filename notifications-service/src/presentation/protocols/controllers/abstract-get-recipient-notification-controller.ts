export type GetRecipientNotificationControllerResponse = { 
  notifications: { 
    id: string; 
    content: string; 
    category: string; 
    recipientId: string; 
  }[]; 
}

export abstract class AbstractGetRecipientNotificationController {
  abstract handle(recipientId: string): Promise<GetRecipientNotificationControllerResponse>;
}