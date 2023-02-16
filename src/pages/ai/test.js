const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: "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",
})
const openai = new OpenAIApi(configuration)

async function start() {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "write 90 word essay on why mayonnaise is disgusting",
    temperature: 0,
    max_tokens: 1000,
  })

  console.log(completion.data.choices[0].text)
}
start()
