import { useDingTalkAccessToken } from "./accessToken";
import { dingTalkRootAppInfo } from "./app";

export const useDingTalkRootAccessToken = () => {
  return useDingTalkAccessToken(dingTalkRootAppInfo);
};
