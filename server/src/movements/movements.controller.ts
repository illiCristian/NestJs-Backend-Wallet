import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  //Delete,
} from '@nestjs/common';
import { MovementsService } from './movements.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Movements')
@Controller('movements')
export class MovementsController {
  constructor(private readonly movementsService: MovementsService) {}

  @Post(':userId')
  create(
    @Body() createMovementDto: CreateMovementDto,
    @Param('userId') userId: string,
  ) {
    return this.movementsService.createMovement(createMovementDto, userId);
  }

  @Get()
  findAll() {
    return this.movementsService.findAllMovements();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.movementsService.findOneMovement(id);
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
