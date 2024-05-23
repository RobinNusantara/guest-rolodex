export interface IMakeApiCall {
    method: "get" | "post" | "put" | "patch" | "delete";
    path: string;
    data?: object;
    params?: object;
}
