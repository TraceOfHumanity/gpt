import { OpenAI, Configuration } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const openai = new OpenAI(configuration);

export async function sendMsgToOpenAI(msg) {
  const res = await openai.createCompletion({
    model: "davinci-002",
    prompt: msg,
    temperature: 0.9,
    maxTokens: 256,
    topP: 1,
    frequency_penalty: 0,
    presense_penalty: 0,
    // engine: "davinci",
    // presencePenalty: 0.6,
    // frequencyPenalty: 0.6,
  });
  return res.data.choices[0].text;
}
