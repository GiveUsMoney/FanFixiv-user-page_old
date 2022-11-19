import Action from '..';

export type ConstructorParam<ResponseType> = {
  clientSideAction: Action<ResponseType>;
};

export default abstract class ServerSyncAction<
  RequestType,
  ResponseType,
> extends Action<RequestType> {
  clientSideAction: Action<ResponseType>;

  constructor(payload: ConstructorParam<ResponseType>) {
    super();
    this.clientSideAction = payload.clientSideAction;
  }

  async doAction(payload: RequestType) {
    let ret;
    try {
      ret = await this.doApi(payload);
      this.clientSideAction.doAction(ret);
    } catch (e) {
      this.handleApiError(e);
    }
  }

  setClientSideAction(clientSideAction: Action<ResponseType>) {
    this.clientSideAction = clientSideAction;
  }

  protected abstract doApi(payload: RequestType): Promise<ResponseType>;

  protected handleApiError(e: unknown) {}
}
