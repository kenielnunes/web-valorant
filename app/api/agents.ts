import { api } from "./axios-config";

export const getAllAgents = async () => {
  const config = {
    language: "pt-BR",
    isPlayableCharacter: true,
  };

  return api.get("/agents/", { params: config });
};
