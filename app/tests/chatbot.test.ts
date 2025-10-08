
import { getBotResponse } from '../ai/chatbot';

test('chatbot echoes user message poetically', async () => {
  const messages = [{ role: 'user', content: 'Hello AI' }];
  const response = await getBotResponse(messages);
  expect(response.content).toContain('Hello AI');
});
