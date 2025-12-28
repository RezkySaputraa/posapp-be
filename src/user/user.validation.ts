import { IRegisterUser } from 'src/interface/user.interface';
import z, { ZodType } from 'zod';

export class UserValidation {
  static readonly REGISTER: ZodType<IRegisterUser> = z.object({
    title: z.string().min(1),
    desc: z.string().min(1),
  });
}
