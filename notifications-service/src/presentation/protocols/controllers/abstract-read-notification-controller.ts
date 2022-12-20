export abstract class AbstractReadNotificationController {
  abstract handle(id: string): Promise<void>;
}