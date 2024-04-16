export default defineEventHandler((event) => {
  const {accessToken} = useDingTalkRootAccessToke();
  return useRuntimeConfig(event);
});
