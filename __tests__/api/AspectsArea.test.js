import { GetAspectsArea } from 'src/api/AspectsArea';

test('GetAspectsArea', async () => {
  const mockId = 1;
  const mockToken = 'mockToken';
  const response = await GetAspectsArea(mockId, mockToken);
  console.log(response)
  expect(response.status).toBe(200);
})
