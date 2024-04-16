import { useDingTalkRootAccessToken } from "~~/dingtalk";

export default defineNitroPlugin(async (nitroApp) => {
  const { accessToken, get, update } = await useDingTalkRootAccessToken();
  console.log("plugin:accessToken", accessToken);
});
