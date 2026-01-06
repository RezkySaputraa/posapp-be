import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { PrismaService } from 'src/common/prisma.service';
import { ValidationService } from 'src/common/validation.service';
import { IRegisterUser, IResponseUser } from 'src/interface/user.interface';
import { Logger } from 'winston';
import { UserValidation } from './user.validation';

@Injectable()
export class UserService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly prismaService: PrismaService,
    private readonly validationService: ValidationService,
  ) {}

  async register(request: IRegisterUser): Promise<IResponseUser> {
    this.logger.debug(`Register new user ${JSON.stringify(request)}`);

    const registerRequest: IRegisterUser = this.validationService.validate(
      UserValidation.REGISTER,
      request,
    );

    const user = await this.prismaService.todo.create({
      data: registerRequest,
    });

    return {
      title: user.title,
      desc: user.desc,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  async getData(): Promise<IResponseUser[]> {
    const result = await this.prismaService.todo.findMany();
    return result;
  }
}
