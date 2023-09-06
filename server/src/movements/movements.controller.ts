import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  //Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { MovementsService } from './movements.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import {
  ApiBearerAuth,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '../users/guard/auth-guard';
import { Request } from 'express';
import { User } from 'src/users/schema/user.model';

@ApiTags('Movements')
@Controller('movements')
export class MovementsController {
  constructor(private readonly movementsService: MovementsService) {}

  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Post()
  create(
    @Body() createMovementDto: CreateMovementDto,
    @Req() request: Request & { user: User },
  ) {
    const { id } = request.user;
    return this.movementsService.createMovement(createMovementDto, id);
  }

  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get('all/')
  findAll() {
    return this.movementsService.findAllMovements();
  }

  @ApiUnauthorizedResponse()
  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @Get()
  findOne(@Req() request: Request & { user: User }) {
    const { id } = request.user;
    return this.movementsService.findUserMovement(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateMovementDto: UpdateMovementDto,
  // ) {
  //   return this.movementsService.update(+id, updateMovementDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.movementsService.remove(+id);
  // }
}
