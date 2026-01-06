import { IRegisterUser, IResponseUser } from 'src/interface/user.interface';
import { UserService } from './user.service';
import { WebResponse } from 'src/model/web.model';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('/api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async register(
    @Body() request: IRegisterUser,
  ): Promise<WebResponse<IResponseUser>> {
    const result = await this.userService.register(request);
    return { data: result };
  }

  @Get()
  async getAll() {
    const result = await this.userService.getData();
    return { data: result };
  }
}
