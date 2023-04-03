import openai from "./chatgpt";

const query = async (prompt: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.9,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res: any) => res.data.choices[0].text)
    .catch(
      (e: any) => `ChatGPT was unable to find an answer! (Error: )${e.message}`
    );

  var answer = res;
  return answer;
};

export default query;
