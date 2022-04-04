/** JavaScript safe modulo operation */
export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}
