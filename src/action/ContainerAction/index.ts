import Action from '..';

export type ConstructorParam<EventType> = {
  actions: Action<EventType>[];
};

export default class ContainerAction<EventType> extends Action<EventType> {
  actions: Action<EventType>[];

  constructor(payload: ConstructorParam<EventType>) {
    super();
    this.actions = payload.actions;
  }

  async doAction(payload: EventType) {
    for (let action of this.actions) {
      await action.doAction(payload);
    }
  }
}
