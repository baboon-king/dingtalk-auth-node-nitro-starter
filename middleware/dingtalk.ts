import { useDingTalkRootAccessToken } from "~/dingtalk";

export default defineEventHandler(async (event) => {
  const { accessToken, get, update } = await useDingTalkRootAccessToken();
  console.log("middleware:accessToken", accessToken);
});
