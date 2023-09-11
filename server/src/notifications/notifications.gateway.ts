import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(81, {
  cors: { origin: '*' },
})
export class NotificationGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  private connectedUsers = new Map<string, Socket>();

  afterInit(server: any) {
    console.log('Esto se ejecuta cuando inicia');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('Hola alguien se conecto al socket 👌👌👌');
  }

  handleDisconnect(client: any) {
    console.log('ALguien se fue! chao chao');
  }

  @SubscribeMessage('event_join')
  handleJoinRoom(client: Socket, room: string) {
    client.join(`room_${room}`);
  }

  @SubscribeMessage('event_message')
  handleIncommingMessage(
    client: Socket,
    payload: { room: string; message: string },
  ) {
    const { room, message } = payload;
    console.log(payload);
    this.server.to(`room_${room}`).emit('new_message', message);
  }

  sendNotificationToUser(userId: string, message: string) {
    const userSocket = this.connectedUsers.get(userId);
    if (userSocket) {
      userSocket.emit('notification', message);
    } else {
      console.log(
        `Usuario con ID ${userId} no está conectado en este momento.`,
      );
      // Puedes optar por almacenar la notificación pendiente si lo deseas
    }
  }
}
