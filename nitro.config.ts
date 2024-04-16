//https://nitro.unjs.io/config
export default defineNitroConfig({
  runtimeConfig: {
    apiToken: process.env.dingApp,
  },
  storage: {
    "dingtalk:app:access_token": {
      driver: "fsLite",
      base: "./.cache/dingTalkAppAccessToken",
    },
  },
});
