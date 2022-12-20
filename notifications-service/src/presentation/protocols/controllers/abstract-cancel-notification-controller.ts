export abstract class AbstractCancelNotificationController {
  abstract handle(id: string): Promise<void>;
}