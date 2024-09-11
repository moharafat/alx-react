import { fromjs } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mappedObject = fromjs(object);

  return mappedObject.getIn
}