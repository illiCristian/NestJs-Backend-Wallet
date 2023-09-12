import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: [
      'https://mercado-wallet.vercel.app',
      'http://localhost:3000',
      'http://localhost:3001',
    ],
  },
})
export class NotificationGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  usersConnected = [];
  private connectedUsers = new Map<string, Socket>();

  afterInit(server: any) {
    console.log('Esto se ejecuta cuando inicia');
  }

  handleConnection(client: any, data: string) {
    console.log('Hola alguien se conecto al socket 👌👌👌');

    this.usersConnected.push({
      client: client.id,
      username: client.handshake.query.username,
    });
  }
  handleDisconnect(client: any) {
    console.log('ALguien se fue! chao chao');
  }

  @SubscribeMessage('event_join')
  handleJoinRoom(client: Socket, room: string) {
    client.join(`room_${room}`);
  }

  @SubscribeMessage('newUser')
  handleNewUser(client: Socket, username: string) {
    this.usersConnected.push({
      client: client.id,
      username,
    });
    // console.log(this.usersConnected);
  }

  sendNotificationToUser(userId: string, message: string) {
    const userFound = this.usersConnected.forEach((user) => {
      if (user.username === userId) {
        this.server.to(user.client).emit('notification', message);
      }
    });
  }
}
