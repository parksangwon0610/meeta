import { asyncIterator } from '../utils/pubsubUtils';
import { listenRoomInput } from './types/types';

const TEST_TRIGGER_NAME = 'myTrigger';
export const resolvers = {
    Subscription: {
        listenRoom: {
            subscribe: (root: any, args: listenRoomInput, context: any) => {
                const { roomId }: { roomId: string; } = args.input;
                return asyncIterator(roomId);
            }
        },
    }
};

