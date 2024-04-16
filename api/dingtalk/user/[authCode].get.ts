import { useDingTalkRootAccessToken } from "~/dingtalk";
import { GetUserIdOutputResult, Response, UserGetOutputResult } from "~/dingtalk/openApi";

export default defineEventHandler(async (event) => {
  const { accessToken } = await useDingTalkRootAccessToken();
  const authCode = getRouterParam(event, "authCode");
  const res = await $fetch<Response<GetUserIdOutputResult>>(
    `https://oapi.dingtalk.com/topapi/v2/user/getuserinfo?access_token=${accessToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        code: authCode,
      },
    },
  );

  if (res.result) {
    const { userid } = res.result;

    return await $fetch<Response<UserGetOutputResult>>(
      `https://oapi.dingtalk.com/topapi/v2/user/get?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          userid,
          language: "zh_CN",
        },
      },
    );
  }

  return res;
});
