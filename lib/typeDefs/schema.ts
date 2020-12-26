import Query from './actions/query';
import Mutation from './actions/mutation';

import User from './types/user';

export const schema = [
    Query,
    Mutation,
    User
]
// module.exports = schema;
export default schema;
