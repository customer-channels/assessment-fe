export class Todo {
    id: number;
    name: string;
    description: string;
    status: EStatus;
}

export enum EStatus {
    TODO = 'TODO',
    DOING = 'DOING',
    DONE = 'DONE'
}
