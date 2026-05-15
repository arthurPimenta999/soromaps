/**
 * Basic user definition. Currently only used for reviews and posts.
 */
export default interface User {
  id: string;
  userName: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
