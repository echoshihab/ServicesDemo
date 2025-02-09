export default abstract class IdentifiableData {
  id?: Number;

  static fromJSON<T>(this: new (...args: any[]) => T, data: unknown): T {
    throw new Error("fromJSON must be implemented");
  }
}
