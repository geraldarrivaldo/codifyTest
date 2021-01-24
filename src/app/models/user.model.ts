export class Comment{
    data: IsiComment[];
}

export class IsiComment{
    owner: DataUser;
    id: number;
    message: string;
    publishDate: number;
}

export class User{
    data: DataUser[];
}

export class DataUser{
    id: number;
    title: string;
    firstName: string;
    lastName: string;
    picture: string;
}

export class DetailUser{
    id: number;
    gender: string;
    location: Location;
    email: string;
    dateOfBirth: Date;
    phone: string;
    registerDate:string;
    picture: string;
    firstName: string;
    lastName: string;
    title: string;
    
}

export class Location{
    street: string;
    city: string;
    state: string;
    country: string;
    timezone: string;
}