import { Comments } from './Comments';
import { Author } from "./Author";


export class Post {
    id!: number;
    timestamp!: string;
    author!: Author;
    title!: string;
    subtitle!: string;
    content!: string;
    comments!: Array<Comments>;
}