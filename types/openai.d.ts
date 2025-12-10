declare module "openai" {
  export interface ChatCompletionMessage {
    content?: string | null;
  }

  export interface ChatCompletionChoice {
    message?: ChatCompletionMessage;
  }

  export interface ChatCompletion {
    choices: ChatCompletionChoice[];
  }

  export default class OpenAI {
    constructor(config: { apiKey?: string });
    chat: {
      completions: {
        create: (args: unknown) => Promise<ChatCompletion>;
      };
    };
  }
}
