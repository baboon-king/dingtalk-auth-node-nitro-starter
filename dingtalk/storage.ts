import { AccessTokenData } from "./accessToken";

export interface UseDingTalkStorageStorageValue {}

export const useDingTalkStorage = () => {
  return useStorage<UseDingTalkStorageStorageValue>(`dingtalk`);
};

export interface UseDingTalkAppStorageStorageValue {}

export const useDingTalkAppStorage = () => {
  return useStorage<UseDingTalkAppStorageStorageValue>(`dingtalk:app`);
};

export interface UseDingTalkAppAccessTokenStorageStorageValue extends AccessTokenData {
  createdAt: number;
  expireAt: number;
}

export const useDingTalkAppAccessTokenStorage = () => {
  return useStorage<UseDingTalkAppAccessTokenStorageStorageValue>(`dingtalk:app:access_token`);
};
