interface Init {
    set: Function;
    get: Function;
    readOnlyParams: any;
    exists: (type: string) => boolean;
    on: (event: string, a: any, b: any) => void;
}
export declare var paramsHandler: (window: Window) => Init;
export declare function locationToObj(searchstr: string): any;
export declare function ObjTolocation(obj: any): string;
export {};