const array = [1, 2, 3, 4, 5, 6, 7, 8];

const createChunk = (array, n) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    const chunk = array.slice(index, n + index);
    chunked.push(chunk);
    index += n;
  }

  return chunked;
};

console.log(createChunk(array, 3));
