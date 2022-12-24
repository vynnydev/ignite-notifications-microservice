import { Module } from "@nestjs/common";
import { DatabaseModule } from "@main/handlers/database.module";
import { SendNotification } from "@use-cases/send-notification";
import { NotificationsController } from "@infra/messaging/kafka/controllers/notifications.controller";

@Module({
  imports: [DatabaseModule],
  providers: [SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}