import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PermissionService } from './permission.service';

@Controller('permissions')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  async createPermission(@Body() body: { name: string; description: string }) {
    return this.permissionService.createPermission(body.name, body.description);
  }

  @Get()
  async getPermissions() {
    return this.permissionService.getPermissions();
  }

  // Handle messages from Gateway
  @MessagePattern({ cmd: 'get_permissions' })
  async handleGetPermissions() {
    return this.permissionService.getPermissions();
  }
}
