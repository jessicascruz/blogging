import { Responds } from './Responds';
import { Author } from './Author';

export class Comments {
    id!: number;
    respondsTo?: Responds | null;
    author!: Author;
    timestamp!: string;
    content!: string;
}