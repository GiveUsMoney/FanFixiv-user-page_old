export default abstract class Observer<EventParam> {
  abstract update(payload: EventParam): Promise<void>;
}
