import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { FlightEntity } from './flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlightEntity])],
  providers: [FlightsService],
  controllers: [FlightsController],
})
export class FlightsModule {}
