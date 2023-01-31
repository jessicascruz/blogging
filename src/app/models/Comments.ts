import { Responds } from './Responds';
import { Author } from './author';

export class Comments {
    id!: number;
    respondsTo!: Responds;
    author!: Author;
    timestamp!: string;
    content!: string;
}