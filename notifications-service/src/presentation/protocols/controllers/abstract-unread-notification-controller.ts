export abstract class AbstractUnreadNotificationController {
  abstract handle(id: string): Promise<void>;
}