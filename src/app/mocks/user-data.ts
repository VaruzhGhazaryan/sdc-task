import { UserJsonData } from '@app/types';

export const UserData: UserJsonData[] = [
  {
    type: "user_node",
    userId: 1,
    name: "a"
  },
  {
    type: "user_node",
    userId: 2,
    name: "b"
  },
  {
    type: "user_node",
    userId: 3,
    name: "c"
  },
  {
    type: "user_node",
    userId: 4,
    name: "d"
  },
  {
    type: "user_to_user_link",
    node1: 1,
    node2: 2
  },
  {
    type: "user_to_user_link",
    node1: 2,
    node2: 3
  },
  {
    type: "user_to_user_link",
    node1: 3,
    node2: 4
  },
  {
    type: "user_to_user_link",
    node1: 4,
    node2: 1
  }
]
