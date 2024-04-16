import Oauth from "@alicloud/dingtalk/oauth2_1_0";
import { Config } from "@alicloud/openapi-client";
import Util from "@alicloud/tea-util";
import { DingTalkAppAuthInfo } from "./app";
import { useDingTalkAppAccessTokenStorage } from "./storage";

export const useDingTalkAccessToken = async (appAuthInfo: DingTalkAppAuthInfo) => {
  const storage = useDingTalkAppAccessTokenStorage();
  const { clientId } = appAuthInfo;

  const get = () => storage.getItem(clientId);

  const getAndUpdate = async () => {
    if (!(await get()) || (await expire())) {
      return update();
    }
    return get();
  };

  const has = () => storage.hasItem(clientId);

  const expire = async () => {
    const currValue = await get();
    if (currValue) {
      return currValue.expireAt < Date.now();
    }
  };

  const update = async () => {
    const result = await accessTokenGetter(appAuthInfo);
    const value = {
      ...result,
      createdAt: Date.now(),
      expireAt: Date.now() + result.expireIn * 1000,
    };
    storage.setItem(clientId, value);
    return value;
  };

  return { ...(await getAndUpdate()), getAndUpdate, get, has, update, expire } as const;
};

export interface AccessTokenData {
  accessToken: string;
  expireIn: number;
}

export async function accessTokenGetter(appAuthInfo: DingTalkAppAuthInfo) {
  const { clientId, clientSecret } = appAuthInfo;
  const config = new Config({});

  config.protocol = "https";
  config.regionId = "central";

  const client = new Oauth.default(config);

  const getAccessTokenRequest = new Oauth.GetAccessTokenRequest({
    appKey: clientId,
    appSecret: clientSecret,
  });

  try {
    const res = await client.getAccessToken(getAccessTokenRequest);
    console.log(res);
    return res.body as AccessTokenData;
  } catch (err) {
    console.log(err);
    if (!Util.empty(err.code) && !Util.empty(err.message)) {
      // err 中含有 code 和 message 属性，可帮助开发定位问题
    }
  }
}
