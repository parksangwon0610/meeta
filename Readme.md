# 실행방법
```
$ npm install or yarn install
$ yarn develop
```
# Playground
* http://localhost:4000/

# API List

## QUERY
* user

## MUTATION
### User
* createUser
* updateUser
* login
### Room
* createRoom
* deleteRoom
* joinRoom

## SUBSCRIPTION
* listenRoom


## Meeting Sequence

```
title Meeting Sequence

participant User A
participant User B
participant Meeta Server

User A->Meeta Server: [M]CreateRoom, [S]Subscribe Room
Meeta Server->Meeta Server: Create Room
Meeta Server-->User A: Room Information, {accessCode, ...Room}

User B->Meeta Server: [M]JoinGroup, [S]Subscribe Room
Meeta Server-->User B: Room Information

User A->Meeta Server: [M]StartMeetingRoom
Meeta Server->Meeta Server: Update Room Status to IN_PROGRESS
Meeta Server->User A: Publish Meeting with Turn Queue Data
Meeta Server->User B: Publish Meeting with Turn Queue Data
loop while(Room Status is CLOSED) ...
User A->User A:Time Check by Room Information
User A->Meeta Server:[M]nextUser
alt if next Turn User
Meeta Server->User A: Publish Turn
Meeta Server->User B: Publish Turn
else if end Mutation by Owner
User A->Meeta Server: [M]ClosedMeetingRoom
Meeta Server->Meeta Server: Update Room Status to CLOSED
Meeta Server->User A: Publish End
Meeta Server->User B: Publish End
Meeta Server-->User A: Response {status}
end 
end
```