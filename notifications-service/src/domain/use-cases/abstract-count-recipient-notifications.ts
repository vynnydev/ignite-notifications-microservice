import { CountRecipientNotificationsResponse, CountRecipientNotificationsRequest } from "./dtos/count-recipient-notifications-dto";

  export abstract class AbstractCountRecipientNotifications {
    abstract countRecipient(request: CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsResponse>
  }