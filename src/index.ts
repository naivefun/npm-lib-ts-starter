export interface Example {
  name: string;
  version: string;
}


export function sum(a: number, b: number) {
  return a + b;
}

export function async() {
  return new Promise(resolve => {
    setTimeout(() => resolve(100), 100);
  });
}

export { Address } from './address';
