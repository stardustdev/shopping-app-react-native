import { Maybe } from './Maybe';

export default interface Item {
  id: Maybe<string>,
  title: Maybe<string>,
}
