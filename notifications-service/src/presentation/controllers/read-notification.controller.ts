import { Controller, Param, Patch } from "@nestjs/common";
import { AbstractReadNotifications } from "@domain/use-cases/abstract-read-notifications";
import { AbstractReadNotificationController } from "@presentation/protocols/controllers/abstract-read-notification-controller";

@Controller('notifications')
export class ReadNotificationsController implements AbstractReadNotificationController {
  constructor(private readNotification: AbstractReadNotifications) {}

  @Patch(':id/read')
  async handle(@Param('id') id: string) {
    await this.readNotification.read({
      notificationId: id,
    });
  }
}