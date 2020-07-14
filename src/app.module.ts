import { Module } from '@nestjs/common';
import { FlightsService } from './flights/flights.service';
import { FlightsController } from './flights/flights.controller';

@Module({
  imports: [],
  controllers: [ FlightsController],
  providers: [ FlightsService],
})
export class AppModule {}
