import getLevel from '../app';
import fetchData from '../http';

jest.mock('../http');

// Обнуляем mock' перед каждым вызовом ф-ии, тогда тесты не будут зависеть друг от друга
beforeEach(() => {
  jest.resetAllMocks();
});

test('test getLevel 1', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 10 });
  getLevel(54);
  expect(fetchData).toBeCalledTimes(1); // проверяет, что функция была вызвана 1 раз
  expect(fetchData).toBeCalledWith('https://server/user/54'); // проверяет, верно ли используется переданный аргумент
});

test('test getLevel 2', () => {
  fetchData.mockReturnValue({ status: 'badly', level: 0 });
  getLevel(20);
  expect(fetchData).toBeCalledTimes(1); // проверяет, что функция была вызвана 1 раз
  expect(fetchData).toBeCalledWith('https://server/user/20'); // проверяет, верно ли используется переданный аргумент
});
