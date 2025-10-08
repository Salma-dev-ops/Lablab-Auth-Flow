import { chatbotEcho } from "../../src/ai/chatbot";

test("chatbot echoes the input", () => {
  const response = chatbotEcho("Hello AfroBot");
  expect(response).toContain("Hello AfroBot");
});

