
import { getBotResponse } from '../ai/chatbot';

test('chatbot echoes user message poetically', async () => {
  const messages = [{ role: 'user', content: 'Hello AI' }];
  const response = await getBotResponse(messages);
  expect(response.content).toContain('Hello AI');
  
  test('AI agent can authenticate and access dashboard', () => {
    const mockAIUser = { email: 'bot@lablab.ai', password: 'neuralNet123' };
    expect(login(mockAIUser)).toBeTruthy();
  });
