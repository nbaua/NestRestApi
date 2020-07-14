import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { FlightsService } from './flights.service';
import { FlightEntity } from './flight.entity';


@Controller('flights')
export class FlightsController {
  constructor(private flightsService: FlightsService) {}

  @Get()
  getFlights() {
    console.log('flights route activated')
    return this.flightsService.getFlights();
  }

  @Get(':id')
  getFlight(@Param() params) {
    console.log('get a single flight', params.id);
    return this.flightsService.getFlightById(params.id);
  }

  @Post()
  createFlight(@Body() flight: FlightEntity) {
    console.log('create flight', flight);
    this.flightsService.createFlight(flight);
  }

  @Put()
  updateFlight(@Body() flight: FlightEntity) {
    console.log('update flight', flight);
    this.flightsService.updateFlight(flight);
  }

  @Delete()
  deleteFlight(@Body() flight: FlightEntity) {
    this.flightsService.deleteFlight(flight);
  }
}
