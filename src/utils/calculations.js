export const calculateFourierTransformation = (array) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    array[i] = element * 50;
  }

  return array;
};

export const calculateSampling = (array) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    array[i] = element + 10;
  }

  return array;
};

export const calculateFaltung = (array1, array2) => {
  const result = [];

  for (let i = 0; i < array1.length + array2.length - 1; i++) {
    let sum = 0;

    for (let j = 0; j < array1.length; j++) {
      if (i - j >= 0 && i - j < array2.length) {
        sum += array1[j] * array2[i - j];
      }
    }

    result.push(sum);
  }

  return result;
};
