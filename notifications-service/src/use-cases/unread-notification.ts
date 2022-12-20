import { Injectable } from "@nestjs/common";
import { AbstractNotificationsRepository } from "@domain/repositories/abstract-notifications-repository";
import { AbstractUnreadNotification } from "@domain/use-cases/abstract-unread-notification";
import { UnreadNotificationRequest, UnreadNotificationResponse } from "@domain/use-cases/dtos/unread-notification-dto";
import { NotificationNotFound } from "@utils/helpers/errors/notification-not-found";

@Injectable()
export class UnreadNotification implements AbstractUnreadNotification {
  constructor(private notificationsRepository: AbstractNotificationsRepository) {}
  
  async unread(request: UnreadNotificationRequest): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}