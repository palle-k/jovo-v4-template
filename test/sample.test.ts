import { TestSuite, InputType } from '@jovotech/framework';

test('should ask the user if they like pizza', async () => {
  const testSuite = new TestSuite();

  const { output } = await testSuite.run({
    type: InputType.Launch, // or 'LAUNCH'
  });

  expect(output).toEqual([
    {
      message: 'Do you like Pizza?',
      listen: true,
      quickReplies: ['yes', 'no'],
    },
  ]);
});
