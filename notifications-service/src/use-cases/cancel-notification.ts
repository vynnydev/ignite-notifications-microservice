import { Injectable } from "@nestjs/common";
import { AbstractNotificationsRepository } from "@domain/repositories/abstract-notifications-repository";
import { AbstractCancelNotification } from "@domain/use-cases/abstract-cancel-notification";
import { CancelNotificationResponse, CancelNotificationRequest } from "@domain/use-cases/dtos/cancel-notification-dto";
import { NotificationNotFound } from "@utils/helpers/errors/notification-not-found";

@Injectable()
export class CancelNotification implements AbstractCancelNotification {
  constructor(private notificationsRepository: AbstractNotificationsRepository) {}

  async cancel(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
    const { notificationId } = request;
    
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}