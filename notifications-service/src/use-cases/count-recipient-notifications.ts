import { Injectable } from "@nestjs/common";
import { AbstractNotificationsRepository } from "@domain/repositories/abstract-notifications-repository";
import { AbstractCountRecipientNotifications } from "@domain/use-cases/abstract-count-recipient-notifications";
import { CountRecipientNotificationsRequest, CountRecipientNotificationsResponse } from "@domain/use-cases/dtos/count-recipient-notifications-dto";

@Injectable()
export class CountRecipientNotifications implements AbstractCountRecipientNotifications {
  constructor(private notificationsRepository: AbstractNotificationsRepository) {}

  async countRecipient(request: CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}