import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
    @Inject('PERMISSION_SERVICE')
    private readonly permissionServiceClient: ClientProxy,
  ) {}

  @Get('/users')
  async getUsers() {
    return this.userServiceClient.send({ cmd: 'get_users' }, {});
  }

  @Get('/permissions')
  async getPermissions() {
    return this.permissionServiceClient.send({ cmd: 'get_permissions' }, {});
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
