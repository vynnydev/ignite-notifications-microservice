import { Injectable } from "@nestjs/common";
import { AbstractNotificationsRepository } from "@domain/repositories/abstract-notifications-repository";
import { AbstractGetRecipientNotifications } from "@domain/use-cases/abstract-get-recipient-notifications";
import { GetRecipientNotificationsRequest, GetRecipientNotificationsResponse } from "@domain/use-cases/dtos/get-recipient-notifications-dto";

@Injectable()
export class GetRecipientNotifications implements AbstractGetRecipientNotifications {
  constructor(private notificationsRepository: AbstractNotificationsRepository) {}
  
  async getRecipient(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}