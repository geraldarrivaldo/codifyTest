export class Post {
    data: Array<DataPost>;
    total: any;
}

export class DataPost {
    owner: User;
    tags: string[];
    id: string;
    image: string;
    text: string;
    likes: string;
    link: string;
    publishDate: string
}

export class User {
    id: number;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
}

export class Tag {
    data: string[];
}