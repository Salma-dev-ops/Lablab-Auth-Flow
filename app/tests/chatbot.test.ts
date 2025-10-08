import { chatbot } from "../../src/ai/chatbot";

test("chatbot echoes messages", () => {
  const response = chatbot("Hello AI");
  expect(response).toBe("Echo: Hello AI");
});
