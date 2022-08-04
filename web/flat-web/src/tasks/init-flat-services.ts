import { flatServices } from "@netless/flat-services";

export function initFlatServices(): void {
    flatServices.register("videoChat", async () => {
        const { AgoraRTCWeb } = await import("@netless/agora-rtc-web");
        return new AgoraRTCWeb({ APP_ID: process.env.AGORA_APP_ID });
    });

    flatServices.register("textChat", async () => {
        const { AgoraRTM } = await import("@netless/agora-rtm");
        AgoraRTM.APP_ID = process.env.AGORA_APP_ID;
        return AgoraRTM.getInstance();
    });
}