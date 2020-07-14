import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FlightEntity } from './flight.entity';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(FlightEntity)
    private flightsRepository: Repository<FlightEntity>,
  ) {}

  async getFlights(): Promise<FlightEntity[]> {
    return await this.flightsRepository.find({});
  }

  async getFlightById(_id: number): Promise<FlightEntity[]> {
    return await this.flightsRepository.find({
      select: [
        'flight_code',
        'origin',
        'destination',
        'air_time',
        'distance',
        'airport',
        'flight_date',
      ],
      where: [{ id: _id }],
    });
  }

  async createFlight(flight: FlightEntity) {
    this.flightsRepository.save(flight);
  }

  async updateFlight(updatedFlight: FlightEntity) {
    const existingFlight = this.flightsRepository.findOneOrFail(
      updatedFlight.id,
    );
    if (existingFlight) {
      await this.flightsRepository.update(updatedFlight.id, updatedFlight);
    }
  }

  async deleteFlight(flight: FlightEntity) {
    this.flightsRepository.delete(flight);
  }
}
