import { Module } from '@nestjs/common';

import { DatabaseModule } from '@main/handlers/database.module';
import { HttpModule } from '@main/handlers/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
