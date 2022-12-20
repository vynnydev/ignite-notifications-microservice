import { GetRecipientNotificationsRequest, GetRecipientNotificationsResponse } from "./dtos/get-recipient-notifications-dto";

export abstract class AbstractGetRecipientNotifications {
  abstract getRecipient(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse>;
}