import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [TypeOrmModule.forRoot(), FlightsModule],
})
export class AppModule {}
