import { PubSub } from 'apollo-server';
const pubsub = new PubSub();

/**
 * 구독 트리거에 메세지를 퍼블리시 합니다.
 * @param trigger 
 * @param payload 
 */
export const publish = (trigger: string, payload: any) => {
    console.log(`🚀 ~ send message to ${trigger} with`, payload);
    pubsub.publish(trigger, payload);
}

/**
 * 트리거를 구독을 요청합니다. 트리거로부터 수신합니다.
 * @param trigger 
 */
export const asyncIterator = (trigger: string) => {
    console.log("🚀 ~ listen...", trigger)
    return pubsub.asyncIterator(trigger);
}