import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { IMakeApiCall } from "src/common/interfaces/IMakeApiCall";
import axios, { AxiosRequestConfig } from "axios";

@Injectable()
export class MidtransService {
    constructor(private readonly configService: ConfigService) {}

    private async makeApiCall(args: IMakeApiCall) {
        const baseUrl = this.configService.get("MIDTRANS_API_URL");
        const serverKey = this.configService.get("MIDTRANS_SERVER_KEY");

        const params = !args?.params ? null : args.params;

        const config: AxiosRequestConfig = {
            url: `${baseUrl}/${args.path}`,
            method: args.method,
            headers: {
                ["Accept"]: "application/json",
                ["Content-Type"]: "application/json",
                ["Authorization"]: `Basic ${Buffer.from(serverKey).toString("base64")}`,
            },
        };

        if (params !== null) {
            Object.assign(config, {
                params,
            });
        }

        if (["post", "put", "patch"].includes(args.method)) {
            Object.assign(config, {
                data: args?.data,
            });
        }

        return await axios.request(config);
    }

    protected async get(path: string, params?: object): Promise<any> {
        return await this.makeApiCall({
            method: "get",
            path,
            params,
        });
    }

    protected async post(
        path: string,
        data: object,
        params?: object,
    ): Promise<any> {
        return await this.makeApiCall({
            method: "post",
            path,
            params,
            data,
        });
    }

    protected async put(
        path: string,
        data: object,
        params?: object,
    ): Promise<any> {
        return await this.makeApiCall({
            method: "put",
            path,
            params,
            data,
        });
    }

    protected async patch(
        path: string,
        data: object,
        params?: object,
    ): Promise<any> {
        return await this.makeApiCall({
            method: "patch",
            path,
            params,
            data,
        });
    }

    protected async delete(path: string, params?: object): Promise<any> {
        return await this.makeApiCall({
            method: "delete",
            path,
            params,
        });
    }
}
