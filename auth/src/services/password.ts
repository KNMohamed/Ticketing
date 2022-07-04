import bcrypt from 'bcrypt';

export class Password {
  private static readonly saltRounds = 10;

  /** Use bcrypt to hash a string */
  static async toHash(password: string) {
    return await bcrypt.hash(password, Password.saltRounds);
  }

  /** Use bcrypt to compare a storedPassword to a suppliedPassword */
  static async compare(storedPassword: string, suppliedPassword: string) {
    return await bcrypt.compare(suppliedPassword, storedPassword);
  }
}
