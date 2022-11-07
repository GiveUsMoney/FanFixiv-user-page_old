import Action from '..';

export type ConstructorParam = {
  actions: Action[];
};

export default class ContainerAction extends Action {
  actions: Action[];

  constructor(payload: ConstructorParam) {
    super();
    this.actions = payload.actions;
  }

  async doAction() {
    for (let action of this.actions) {
      await action.doAction();
    }
  }
}
