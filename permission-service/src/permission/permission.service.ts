import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Permission, PermissionDocument } from './permission.schema';

@Injectable()
export class PermissionService {
  constructor(
    @InjectModel(Permission.name)
    private permissionModel: Model<PermissionDocument>,
  ) {}

  async createPermission(
    name: string,
    description: string,
  ): Promise<Permission> {
    const newPermission = new this.permissionModel({ name, description });
    return newPermission.save();
  }

  async getPermissions(): Promise<Permission[]> {
    return this.permissionModel.find().exec();
  }
}
