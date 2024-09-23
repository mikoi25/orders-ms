import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs, NATS_SERVERS } from 'src/config';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [
    ClientsModule.register([
      {
        name: NATS_SERVERS,
        transport: Transport.NATS,
        options: {
          servers: envs.nats_servers
        },
      },
    ]),
  ],
})
export class OrdersModule { }
