import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { SendNotification } from "@use-cases/send-notification";

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { content, category, recipientId }: SendNotificationPayload,
  ) {
    console.log(content)
    /*
    await this.sendNotification.send({
      content,
      category,
      recipientId,
    }); */
  }
}