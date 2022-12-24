import { Module } from '@nestjs/common';

import { DatabaseModule } from '@main/handlers/database.module';
import { HttpModule } from '@main/handlers/http.module';
import { MessagingModule } from '@infra/messaging/messaging.module';

@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
})
export class AppModule {}
