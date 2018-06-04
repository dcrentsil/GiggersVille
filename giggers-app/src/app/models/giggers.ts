export class Gigger{
    id: number;
    type: string;
    name: string;
    email: string;
    username: string;
    speciality: string;
    description : string;
    password : string;
    constructor(data: {
        id?: number,
        type?: string,
        name?: string,
        email?: string,
        username?: string,
        speciality?: string,
        description? : string,
        giggerid? : string,
        password? : string,
    } = {}) {
        this.id = data.id;
        this.type = data.type;
        this.name = data.name;
        this.email = data.email;
        this.username = data.username;
        this.speciality = data.speciality;
        this.description = data.description;
        this.password = data.password;
    }
}

