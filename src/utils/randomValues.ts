// Function to generate random number for given range
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to  randomly select a value from given array
export function selectRandomValueFromArray(values: Array<any>) {
  if (values.length === 0) {
    console.log(undefined);
  } else {
    const index: number = Math.floor(Math.random() * values.length);
    const result = values[index];
    return result;
  }
}

// Function to generate a random username
export function generateUsername(): string {
  const timestamp = new Date().getTime();
  return `user_${timestamp}`;
}

//Function to generate a random password
export function generatePassword(length: number): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

//Function to generate a random number from a count of records