export default abstract class Action<EventType> {
  public abstract doAction(payload: EventType): Promise<void>;
}
