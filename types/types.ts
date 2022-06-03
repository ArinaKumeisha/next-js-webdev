export type HeadingType = {
  teg?: any;
  text: string;
}

export type User = {
  id: number;
  name: string;
  username: string;
  address: Address;
  email?: string;
}

type Address = {
  street: string;
  suite?: string;
  city?: string;
}

export type Post = {
  title: string;
  id: string;
}
export type PostWithInfo = {
  id: number;
  title: string;
  body?: string;
}

export type SocialsType = {
  id: number;
  icon: string;
  path: string;
}