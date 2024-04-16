import { DING_ROOT_APP_CLIENT_ID, NITRO_DING_ROOT_APP_CLIENT_SECRET } from "~~/env";

export interface DingTalkAppAuthInfo {
  clientId: string;
  clientSecret: string;
}

export const dingTalkRootAppInfo = {
  clientId: DING_ROOT_APP_CLIENT_ID,
  clientSecret: NITRO_DING_ROOT_APP_CLIENT_SECRET,
} satisfies DingTalkAppAuthInfo;
