import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Cron, CronExpression } from "@nestjs/schedule";
import { InjectRepository } from "@nestjs/typeorm";
import axios from "axios";
import * as OAuthClient from "intuit-oauth";
import { QuickbookModel } from "src/models/Quickbook/QuicbookModel";
import { Repository } from "typeorm";

@Injectable()
export class QuickbookService {
    private oauthClient: any;
    private readonly logger = new Logger(QuickbookService.name);

    constructor(
        @InjectRepository(QuickbookModel)
        private readonly quickbookRepository: Repository<QuickbookModel>,
        private readonly configService: ConfigService,
    ) {}

    public async authentication(): Promise<string> {
        this.oauthClient = new OAuthClient({
            clientId: this.configService.get("QUICKBOOK_CLIENT_ID"),
            clientSecret: this.configService.get("QUICKBOOK_CLIENT_SECCRET"),
            environment: "sandbox",
            redirectUri: this.configService.get("QUICKBOOK_REDIRECT_URI"),
        });

        const authUri = this.oauthClient.authorizeUri({
            scope: [OAuthClient.scopes.Accounting, OAuthClient.scopes.OpenId],
            state: "development",
        });

        return authUri;
    }

    public async callback(url: string): Promise<any> {
        const response = await this.oauthClient.createToken(url);

        return response;
    }

    @Cron(CronExpression.EVERY_5_MINUTES)
    private async token(): Promise<any> {
        this.logger.log("[QBO Auth] Run");

        const quickbook = await this.quickbookRepository.findOne({
            where: {
                id: 1,
            },
        });

        if (!quickbook) {
            this.logger.error("[QBO Auth] Token Not Found!");
            return;
        }

        const clientId = this.configService.get("QUICKBOOK_CLIENT_ID");
        const clientSecret = this.configService.get("QUICKBOOK_CLIENT_SECCRET");

        const data = new URLSearchParams({
            ["grant_type"]: "refresh_token",
            ["refresh_token"]: quickbook.refreshToken,
            ["client_id"]: clientId,
            ["client_secret"]: clientSecret,
        });

        const response = await axios.request({
            url: "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer",
            method: "POST",
            data,
        });

        if (!quickbook) {
            this.logger.error("[QBO Auth] Failed to Retrieve Token!");
            return;
        }

        await this.quickbookRepository.save({
            id: 1,
            accessToken: response.data["access_token"],
            refreshToken: response.data["refresh_token"],
        });

        this.logger.log("[QBO Auth] Token Updated!");

        return response.data;
    }
}
