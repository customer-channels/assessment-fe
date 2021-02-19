/**
 * Simple Todo model definition.
 */
export class Todo
{
    // UUID identifier
    private id: string;
    // name of the task
    public title: string;
    // completion status
    public complete: boolean;

    /**
     * @constructor Property instantiation through params.
     * @param values | Object
     */
    constructor(values: Object = {})
    {
        Object.assign(this, values);
    }
}