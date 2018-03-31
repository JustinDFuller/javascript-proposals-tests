import test from 'ava';

function doubleSay (str) {
  return str + ", " + str;
}

function capitalize (str) {
  return str[0].toUpperCase() + str.substring(1);
}

function exclaim (str) {
  return str + '!';
}

test('Simple pipeline usage', (t) => {
  let result = "hello"
    |> doubleSay
    |> capitalize
    |> exclaim;

  t.is(result, 'Hello, hello!');
});

test('Partial application pipeline', (t) => {
  let result = -5
    |> (_ => Math.max(0, _));

  t.is(result, 0);
});

test('Async pipeline', async (t) => {
  const asyncAdd = (number) => Promise.resolve(number + 5);
  const subtractOne = (num1) => num1 - 1;
  const result = 10
    |> asyncAdd
    |> (async (num) => subtractOne(await num));
  
  t.is(await result, 14);
});
