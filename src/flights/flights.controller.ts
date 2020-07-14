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
import { FlightDto } from './FlightDto';

@Controller('flights')
export class FlightsController {
  constructor(private flightsService: FlightsService) {}

  @Get()
  getFlights() {
    return this.flightsService.getFlights();
  }

  @Get(':id')
  getFlight(@Param() params) {
    console.log('get a single flight', params.id);
    return this.flightsService.getFlights().filter(p => p.id == params.id);
  }

  @Post()
  createFlight(@Body() flight: FlightDto) {
    console.log('create flight', flight);
    this.flightsService.createFlight(flight);
  }

  @Put()
  updateFlight(@Body() flight: FlightDto) {
    console.log('update flight', flight);
    this.flightsService.updateFlight(flight);
  }

  @Delete()
  deleteFlight(@Body() flight: FlightDto) {
    console.log('delete flight', flight.id);
    this.flightsService.deleteFlight(flight.id);
  }
}
