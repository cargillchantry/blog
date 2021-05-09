export function first<T> (arr: T | T[]): T | undefined {
  if (Array.isArray(arr)) {
    return arr[0]
  }
  return arr
}

export function asArray<T> (arr: T | T[]): T[] {
  if (Array.isArray(arr)) {
    return arr
  }
  return [arr]
}
