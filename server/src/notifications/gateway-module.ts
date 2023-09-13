import { Module } from '@nestjs/common';
import { NotificationGateway } from './notifications.gateway';

@Module({
  imports: [NotificationGateway],
  controllers: [],
  providers: [],
})
export class GatewayModule {}
