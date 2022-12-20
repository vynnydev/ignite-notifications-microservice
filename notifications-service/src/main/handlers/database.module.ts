import { Module } from "@nestjs/common";
import { PrismaService } from "@infra/adapters/prisma/prisma.service";
import { AbstractNotificationsRepository } from "@domain/repositories/abstract-notifications-repository";
import { PrismaNotificationsRepository } from "@infra/database/repositories/prisma/prisma-notifications-repository";

@Module({
  providers: [
    PrismaService,
    {
      provide: AbstractNotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [AbstractNotificationsRepository],
})
export class DatabaseModule {}