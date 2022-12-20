import { Controller, Get, Param } from "@nestjs/common";
import { AbstractCountRecipientNotifications } from "@domain/use-cases/abstract-count-recipient-notifications";
import { AbstractCountRecipientNotificationController, CountRecipientNotificationControllerResponse } from "@presentation/protocols/controllers/abstract-count-recipient-notifications-controller";

@Controller('notifications')
export class CountRecipientNotificationsController implements AbstractCountRecipientNotificationController {
  constructor(private countRecipientNotifications: AbstractCountRecipientNotifications) {}

  @Get('count/from/:recipientId')
  async handle(@Param('recipientId') recipientId: string): Promise<CountRecipientNotificationControllerResponse> {
    const { count } = await this.countRecipientNotifications.countRecipient({
      recipientId,
    });

    return {
      count,
    };
  }
}