import Query from './actions/query';
import Mutation from './actions/mutation';
import Subscription from "./actions/subscription";
import Enum from './enums/enums';

import User from './types/user';
import Room from './types/room';

export const schema = [
    Query,
    Mutation,
    Subscription,
    Enum,
    User,
    Room,
]

export default schema;
