declare const _default: AuthApi;
export default _default;
declare class AuthApi {
    login(data: any): Promise<import("axios").AxiosResponse<any, any>>;
    me(): Promise<import("axios").AxiosResponse<any, any>>;
    logout(): Promise<import("axios").AxiosResponse<any, any>>;
    resetPasswordEmail(data: any): Promise<import("axios").AxiosResponse<any, any>>;
    resetPassword(data: any): Promise<import("axios").AxiosResponse<any, any>>;
}
