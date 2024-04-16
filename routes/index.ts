import { useDingTalkRootAccessToken } from "~/dingtalk";

export default eventHandler(async (event) => {
  const { accessToken, getAndUpdate } = await useDingTalkRootAccessToken();
  return getAndUpdate();
});
