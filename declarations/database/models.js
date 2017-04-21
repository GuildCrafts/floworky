declare type Item = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  starred: boolean;
  parent_id: number;
  user_id: number;
  is_deleted: boolean;
};

declare type User = {
  id: number;
  email: string;
  password: string;
};
