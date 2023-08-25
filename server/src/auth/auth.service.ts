import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { SignUpDto } from './dto/sign-up.dto';
import { LoginDto } from './dto/login-dto';
import { UnauthorizedException } from '@nestjs/common';

import { Wallet } from './schema/wallet.schema';
import { User } from './schema/auth.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,

    private jwtService: JwtService,
    @InjectModel(Wallet.name)
    private readonly walletModel: Model<Wallet>,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    const userExists = await this.userModel.findOne({ email });
    if (userExists) {
      throw new UnauthorizedException('User already exists');
    } else {
      const hasedPasswrod = await bcrypt.hash(password, 10);

      const newWallet = await this.walletModel.create({});

      const user = await this.userModel.create({
        name,
        email,
        password: hasedPasswrod,
        wallet: newWallet._id,
      });

      const token = this.jwtService.sign({
        id: user._id,
        email: user.email,
      });

      return {
        token,
      };
    }
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = await this.jwtService.signAsync({
      id: user._id,
      email: user.email,
    });
    return {
      token,
    };
  }
}
