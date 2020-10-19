import { Maybe } from './Maybe';

export default interface User {
  id: Maybe<string>,
  firstName: Maybe<string>,
  lastName: Maybe<string>,
  email: Maybe<string>,
  password: Maybe<string>,
}
