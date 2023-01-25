import { Comments } from './Comments';
import { Author } from "./author";


export class Post {
    id!: number;
    timestamp!: string;
    author!: Author;
    title!: string;
    subtitle!: string;
    content!: string;
    comments!: Comments;
}