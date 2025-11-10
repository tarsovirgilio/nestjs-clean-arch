import { faker } from '@faker-js/faker';
import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });

  it('Constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('getName method', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
    expect(sut.getName()).toEqual(props.name);
  });

  it('getEmail method', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
    expect(sut.getEmail()).toEqual(props.email);
  });

  it('getPassword method', () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toBe('string');
    expect(sut.getPassword()).toEqual(props.password);
  });

  it('getCreatedAt method', () => {
    expect(sut.props.createdAt).toBeDefined();
    expect(sut.props.createdAt).toEqual(props.createdAt);
    expect(sut.getCreatedAt()).toBeInstanceOf(Date);
    expect(sut.getCreatedAt()).toEqual(sut.props.createdAt);
  });
});
