/**
 * Simple Todo model definition.
 */
export class Todo
{
    // UUID identifier
    public id: string;
    // name of the task
    public title: string;
    // completion status
    public complete: boolean = false;

    /**
     * @constructor Property instantiation through params.
     * @param values | Object
     */
    constructor(values: Object = {})
    {
        Object.assign(this, values);
    }
}