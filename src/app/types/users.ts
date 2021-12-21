export type UserDataType = 'user_node' | 'user_to_user_link'

export interface User {
  userId: number | null;
  name: string;
}

export interface U2ULink {
  node1: number | null;
  node2: number | null;
}

export interface UserJsonData extends Partial<User>, Partial<U2ULink> {
  type: UserDataType,
}

export interface UserDataMappedResult {
  users: User[];
  links: U2ULink[];
}
