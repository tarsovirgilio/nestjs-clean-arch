export abstract class Entity<Props = any> {
  public readonly _id: string;
  public readonly props: Props;

  constructor(props: Props, id?: string) {
    this.props = props;
    this._id = id ?? crypto.randomUUID();
  }

  get id(): string {
    return this._id;
  }

  toJSON(): Required<Props> & { id: string } {
    return {
      id: this._id,
      ...this.props,
    } as Required<Props> & { id: string };
  }
}
