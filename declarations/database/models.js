declare type Item = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  parent_id: number;
  user_id: number;
};

declare type User = {
  id: number;
  email: string;
  password: string;
};
