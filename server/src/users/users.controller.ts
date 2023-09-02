import {
  Controller,
  Get,
  Body,
  Patch,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from './guard/auth-guard';
import { Request } from 'express';
import { User } from './schema/user.model';
//API TAGS es para la documentacion con swagger
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get()
  findOne(@Req() request: Request & { user: User }) {
    const { id } = request.user;
    return this.usersService.findOne(id);
  }

  //<-- ApiUnauthorizedResponse,ApiBearerAuth son para la documentacion}
  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch()
  update(
    @Req() request: Request & { user: User },
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const { id } = request.user;
    return this.usersService.update(id, updateUserDto);
  }

  //ruta que deberia poder acceder solo el admin o el mismo usuario que quiera borrar su cuenta
  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete()
  remove(@Req() request: Request & { user: User }) {
    const { id } = request.user;
    return this.usersService.remove(id);
  }
}
