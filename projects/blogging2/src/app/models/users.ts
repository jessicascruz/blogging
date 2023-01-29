import { Post } from "./post";

export class Users {
    id!: number;
    username!: string;
    memberSince!: string;
    friendIds!: Array<number>;
    posts!: Array<Post>;
}