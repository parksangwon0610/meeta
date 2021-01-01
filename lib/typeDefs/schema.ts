import Query from './actions/query';
import Mutation from './actions/mutation';
import Enum from './enums/enums';

import User from './types/user';
import Room from './types/room';

export const schema = [
    Query,
    Mutation,
    Enum,
    User,
    Room,
]

export default schema;
