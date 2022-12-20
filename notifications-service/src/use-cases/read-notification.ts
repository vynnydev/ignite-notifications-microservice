import { Injectable } from "@nestjs/common";
import { AbstractNotificationsRepository } from "@domain/repositories/abstract-notifications-repository";
import { AbstractReadNotifications } from "@domain/use-cases/abstract-read-notifications";
import { ReadNotificationRequest, ReadNotificationResponse } from "@domain/use-cases/dtos/read-notification-dto";
import { NotificationNotFound } from "@utils/helpers/errors/notification-not-found";

@Injectable()
export class ReadNotification implements AbstractReadNotifications {
  constructor(private notificationsRepository: AbstractNotificationsRepository) {}

  async read(request: ReadNotificationRequest): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}