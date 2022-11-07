export default abstract class Action {
  public abstract doAction(): Promise<void>;
}
