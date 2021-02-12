export let getTotalTime: ({turnTime, memberCount, commentCycle}: { turnTime: any; memberCount: any; commentCycle: any }) => number;

getTotalTime = ({turnTime, memberCount, commentCycle}) => {
    return turnTime * memberCount * commentCycle;
};
