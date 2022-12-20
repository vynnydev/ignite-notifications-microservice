import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database.module";

import { CancelNotification } from "@use-cases/cancel-notification";
import { CountRecipientNotifications } from "@use-cases/count-recipient-notifications";
import { GetRecipientNotifications } from "@use-cases/get-recipient-notifications";
import { ReadNotification } from "@use-cases/read-notification";
import { SendNotification } from "@use-cases/send-notification";
import { UnreadNotification } from "@use-cases/unread-notification";

import { CancelNotificationsController } from "@presentation/controllers/cancel-notification.controller";
import { CountRecipientNotificationsController } from "@presentation/controllers/count-recipient-notifications.controller";
import { GetRecipientNotificationsController } from "@presentation/controllers/get-recipient-notifications.controller";
import { ReadNotificationsController } from "@presentation/controllers/read-notification.controller";
import { SendNotificationsController } from "@presentation/controllers/send-notification.controller";
import { UnreadNotificationsController } from "@presentation/controllers/unread-notification.controller";

import { AbstractSendNotification } from "@domain/use-cases/abstract-send-notification";
import { AbstractCancelNotification } from "@domain/use-cases/abstract-cancel-notification";
import { AbstractCountRecipientNotifications } from "@domain/use-cases/abstract-count-recipient-notifications";
import { AbstractGetRecipientNotifications } from "@domain/use-cases/abstract-get-recipient-notifications";
import { AbstractReadNotifications } from "@domain/use-cases/abstract-read-notifications";
import { AbstractUnreadNotification } from "@domain/use-cases/abstract-unread-notification";

@Module({
  imports: [DatabaseModule],
  controllers: [
    CancelNotificationsController,
    CountRecipientNotificationsController,
    GetRecipientNotificationsController,
    ReadNotificationsController,
    SendNotificationsController,
    UnreadNotificationsController,
  ],
  providers: [
    { useClass: SendNotification, provide: AbstractSendNotification },
    { useClass: CancelNotification, provide: AbstractCancelNotification },
    { useClass:  CountRecipientNotifications, provide: AbstractCountRecipientNotifications },
    { useClass: GetRecipientNotifications, provide: AbstractGetRecipientNotifications },
    { useClass: ReadNotification, provide: AbstractReadNotifications },
    { useClass: UnreadNotification, provide: AbstractUnreadNotification },
  ],
})
export class HttpModule {}