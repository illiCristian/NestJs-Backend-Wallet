import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Types } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { WalletService } from 'src/wallet/wallet.service';
import { User } from './schema/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    @Inject(forwardRef(() => WalletService))
    private readonly walletService: WalletService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    try {
      const { name, email, password } = createUserDto;

      const newWallet = await this.walletService.createWallet();

      const user = new this.userModel({
        password: bcrypt.hashSync(password, 10),
        name,
        email,
        walletId: newWallet._id,
      });

      await user.save();
      return user;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`${createUserDto.email} already exists!`);
      }
      throw new InternalServerErrorException('Something bad happen!!!');
    }
  }

  async getUserAndCheck(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId).exec();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.walletId) {
      throw new NotFoundException('User does not have a wallet');
    }

    return user;
  }

  findAll() {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    {
      if (!Types.ObjectId.isValid(id)) {
        throw new BadRequestException('Invalid ObjectId');
      }
      const user = await this.userModel.findById(id);

      if (!user) {
        throw new BadRequestException('User not found');
      }
      return user;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ObjectId');
    }

    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Actualizar campos permitidos del DTO
    if (updateUserDto.name) {
      user.name = updateUserDto.name;
    }

    if (updateUserDto.email) {
      user.email = updateUserDto.email;
    }

    // Continuar con otros campos que se permitia actualizar

    await user.save();

    return user;
  }

  async remove(id: string): Promise<User> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid ObjectId');
    }

    const user = await this.userModel.findByIdAndRemove(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
