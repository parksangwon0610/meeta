import { asyncIterator } from '../utils/pubsubUtils';
import { listenRoomInput } from './types/types';

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

