/**
 * Basic user definition. Currently only used for reviews and posts.
 */
export default interface User {
  id: string;
  username: string;
  avatarUrl?: string;
}
