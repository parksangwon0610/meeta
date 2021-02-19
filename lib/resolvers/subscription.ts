import { asyncIterator } from '../utils/pubsubUtils';

const TEST_TRIGGER_NAME = 'myTrigger';
export const resolvers = {
    Subscription: {
        listenMessage: {
            subscribe: () => asyncIterator(TEST_TRIGGER_NAME),
        }
    }
};

