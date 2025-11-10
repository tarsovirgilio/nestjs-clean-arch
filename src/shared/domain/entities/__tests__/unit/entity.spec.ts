import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

function uuidValidate(uuid: string): boolean {
  const regex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i;
  return regex.test(uuid);
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('should set props and id', () => {
    const props: StubProps = {
      prop1: 'value1',
      prop2: 123,
    };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(typeof entity._id).toBe('string');
  });

  it('should accept a valid uuid', () => {
    const props: StubProps = {
      prop1: 'value1',
      prop2: 123,
    };

    const id = '7522a095-ccf5-480d-a49e-e3e540d98380';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('should convert a entity to a Javascript Object', () => {
    const props: StubProps = {
      prop1: 'value1',
      prop2: 123,
    };

    const id = '7522a095-ccf5-480d-a49e-e3e540d98380';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
