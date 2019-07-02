export declare const enum Flag {
    float = "float",
    int = "int",
    string = "string",
    boolean = "boolean"
}
export interface IFlags {
    [flag: string]: {
        type: Flag;
        default: any;
    };
}
export interface IBaseCommandParseResult {
    [flag: string]: any;
    content: string;
}
export declare const commandParser: <R extends IBaseCommandParseResult = IBaseCommandParseResult>(input: string, flags: IFlags) => R;
