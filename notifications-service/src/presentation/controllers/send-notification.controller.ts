import { Body, Controller, Post } from "@nestjs/common";
import { AbstractSendNotification } from "@domain/use-cases/abstract-send-notification";
import { NotificationPresenter } from "@presentation/presenters/notification-presenter";
import { CreateNotificationBody } from "@presentation/controllers/dtos/create-notification-body";
import { AbstractSendNotificationController, SendNotificationControllerResponse } from "@presentation/protocols/controllers/abstract-send-notification-controller";

@Controller('notifications')
export class SendNotificationsController implements AbstractSendNotificationController {
  constructor(private sendNotification: AbstractSendNotification) {}

  @Post()
  async handle(@Body() body: CreateNotificationBody): Promise<SendNotificationControllerResponse> {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.send({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationPresenter.toHTTP(notification),
    };
  }
}