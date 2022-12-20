import { Controller, Param, Patch } from "@nestjs/common";
import { AbstractUnreadNotification } from "@domain/use-cases/abstract-unread-notification";
import { AbstractUnreadNotificationController } from "@presentation/protocols/controllers/abstract-unread-notification-controller";

@Controller('notifications')
export class UnreadNotificationsController implements AbstractUnreadNotificationController
 {
  constructor(private unreadNotification: AbstractUnreadNotification) {}

  @Patch(':id/unread')
  async handle(@Param('id') id: string): Promise<void> {
    await this.unreadNotification.unread({
      notificationId: id,
    });
  }
}