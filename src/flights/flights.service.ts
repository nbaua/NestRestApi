import { Injectable } from '@nestjs/common';
import { FlightDto } from './FlightDto';

@Injectable()
export class FlightsService {
  //todo - get from database
  flights = [
    {
      id: 1,
      flight_code: 'EAI-9E',
      tailnum: 'N0EGMQ',
      airline: 'Endeavor Air Inc.',
      flight_ref: '2915-N0EGMQ-9E-3331',
    },
    {
      id: 2,
      flight_code: 'EAI-9E',
      tailnum: 'N10156',
      airline: 'Endeavor Air Inc.',
      flight_ref: '4779-N10156-9E-3338',
    },
    {
      id: 3,
      flight_code: 'EAI-9E',
      tailnum: 'N103US',
      airline: 'Endeavor Air Inc.',
      flight_ref: '9337-N103US-9E-3359',
    },
    {
      id: 4,
      flight_code: 'EAI-9E',
      tailnum: 'N104UW',
      airline: 'Endeavor Air Inc.',
      flight_ref: '4404-N104UW-9E-3422',
    },
    {
      id: 5,
      flight_code: 'EAI-9E',
      tailnum: 'N107US',
      airline: 'Endeavor Air Inc.',
      flight_ref: '6945-N107US-9E-3452',
    },
    {
      id: 6,
      flight_code: 'EAI-9E',
      tailnum: 'N108UW',
      airline: 'Endeavor Air Inc.',
      flight_ref: '1365-N108UW-9E-3453',
    },
    {
      id: 7,
      flight_code: 'EAI-9E',
      tailnum: 'N109UW',
      airline: 'Endeavor Air Inc.',
      flight_ref: '3940-N109UW-9E-3483',
    },
    {
      id: 8,
      flight_code: 'EAI-9E',
      tailnum: 'N110UW',
      airline: 'Endeavor Air Inc.',
      flight_ref: '3375-N110UW-9E-3521',
    },
    {
      id: 9,
      flight_code: 'EAI-9E',
      tailnum: 'N11109',
      airline: 'Endeavor Air Inc.',
      flight_ref: '7189-N11109-9E-3523',
    },
    {
      id: 10,
      flight_code: 'EAI-9E',
      tailnum: 'N11119',
      airline: 'Endeavor Air Inc.',
      flight_ref: '3800-N11119-9E-3525',
    },
    {
      id: 11,
      flight_code: 'EAI-9E',
      tailnum: 'N11140',
      airline: 'Endeavor Air Inc.',
      flight_ref: '6361-N11140-9E-3793',
    },
    {
      id: 12,
      flight_code: 'EAI-9E',
      tailnum: 'N11150',
      airline: 'Endeavor Air Inc.',
      flight_ref: '5917-N11150-9E-3798',
    },
    {
      id: 13,
      flight_code: 'EAI-9E',
      tailnum: 'N11155',
      airline: 'Endeavor Air Inc.',
      flight_ref: '7822-N11155-9E-3856',
    },
    {
      id: 14,
      flight_code: 'AA-1',
      tailnum: 'N11164',
      airline: 'American Airlines Inc.',
      flight_ref: '3933-N11164-AA-1',
    },
    {
      id: 15,
      flight_code: 'AA-1039',
      tailnum: 'N11184',
      airline: 'American Airlines Inc.',
      flight_ref: '2191-N11184-AA-1039',
    },
    {
      id: 16,
      flight_code: 'AA-1073',
      tailnum: 'N11187',
      airline: 'American Airlines Inc.',
      flight_ref: '1933-N11187-AA-1073',
    },
    {
      id: 17,
      flight_code: 'AA-1141',
      tailnum: 'N11191',
      airline: 'American Airlines Inc.',
      flight_ref: '9965-N11191-AA-1141',
    },
    {
      id: 18,
      flight_code: 'AA-117',
      tailnum: 'N11192',
      airline: 'American Airlines Inc.',
      flight_ref: '4478-N11192-AA-117',
    },
    {
      id: 19,
      flight_code: 'AA-119',
      tailnum: 'N11194',
      airline: 'American Airlines Inc.',
      flight_ref: '8641-N11194-AA-119',
    },
    {
      id: 20,
      flight_code: 'AA-133',
      tailnum: 'N111US',
      airline: 'American Airlines Inc.',
      flight_ref: '4890-N111US-AA-133',
    },
  ];

  getFlights() {
    return this.flights;
  }

  createFlight(flight:FlightDto) {
    flight.id = this.flights.length + 1;
    this.flights = [...this.flights, { ...flight }];
  }

  updateFlight(flight) {
    this.flights = this.flights.map(f => {
      if (f.id == flight.id) {
        return { ...flight };
      }
      return f;
    });
  }

  deleteFlight(id) {
    this.flights = this.flights.filter(p => p.id != id);
  }
}
