import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: { name: string; email: string }) {
    return this.userService.createUser(body.name, body.email);
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  // Handle messages from Gateway
  @MessagePattern({ cmd: 'get_users' })
  async handleGetUsers() {
    return this.userService.getUsers();
  }
}
