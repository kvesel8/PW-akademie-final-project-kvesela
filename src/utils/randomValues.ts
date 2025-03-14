export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function selectRandomValueFromArray(values: Array<any>) {
  if (values.length === 0) {
    console.log(undefined);
  } else {
    const index: number = Math.floor(Math.random() * values.length);
    const result = values[index];
    return result;
  }
}