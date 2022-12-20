import { Controller, Get, Param } from "@nestjs/common";
import { AbstractGetRecipientNotifications } from "@domain/use-cases/abstract-get-recipient-notifications";
import { NotificationPresenter } from "@presentation/presenters/notification-presenter";
import { AbstractGetRecipientNotificationController, GetRecipientNotificationControllerResponse } from "@presentation/protocols/controllers/abstract-get-recipient-notification-controller";

@Controller('notifications')
export class GetRecipientNotificationsController implements AbstractGetRecipientNotificationController {
  constructor(private getRecipientNotifications: AbstractGetRecipientNotifications) {}

  @Get('from/:recipientId')
  async handle(@Param('recipientId') recipientId: string): Promise<GetRecipientNotificationControllerResponse> {
    const { notifications } = await this.getRecipientNotifications.getRecipient({
      recipientId,
    });

    return {
      notifications: notifications.map(NotificationPresenter.toHTTP),
    };
  }
}