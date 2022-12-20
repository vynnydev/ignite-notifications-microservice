import { Controller, Param, Patch } from "@nestjs/common";
import { AbstractCancelNotification } from "@domain/use-cases/abstract-cancel-notification";
import { AbstractCancelNotificationController } from "@presentation/protocols/controllers/abstract-cancel-notification-controller";

@Controller('notifications')
export class CancelNotificationsController implements AbstractCancelNotificationController
 {
  constructor(
    private cancelNotification: AbstractCancelNotification,
  ) {}

  @Patch(':id/cancel')
  async handle(@Param('id') id: string) {
    await this.cancelNotification.cancel({
      notificationId: id,
    });
  }
}