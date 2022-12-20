import { Injectable } from "@nestjs/common";
import { Content } from "@entities/content";
import { Notification } from "@entities/notification";
import { AbstractNotificationsRepository } from "@domain/repositories/abstract-notifications-repository";
import { AbstractSendNotification } from "@domain/use-cases/abstract-send-notification";
import { SendNotificationDTO, SendNotificationResponse } from "@domain/use-cases/dtos/send-notification-dto";

@Injectable()
export class SendNotification implements AbstractSendNotification {
  constructor(private notificationsRepository: AbstractNotificationsRepository) {}
  
  async send(request: SendNotificationDTO): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return { notification }
  }
}