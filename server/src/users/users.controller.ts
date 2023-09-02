import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from './guard/auth-guard';

//API TAGS es para la documentacion con swagger
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  //ruta a borrar
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.usersService.findOne(id);
  }

  //<-- ApiUnauthorizedResponse,ApiBearerAuth son para la documentacion}
  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  //ruta que deberia poder acceder solo el admin o el mismo usuario que quiera borrar su cuenta
  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
