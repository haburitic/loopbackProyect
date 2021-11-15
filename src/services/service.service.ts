import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {TestDataSource} from '../datasources';

// Add the following interface
export interface GeoPoint {
  /**
   * latitude
   */
  y: number;

  /**
   * longitude
   */
  x: number;
}

export interface Geocoder {
  // Add the following property
  geocode(address: string): Promise<GeoPoint[]>;
}

@injectable({scope: BindingScope.TRANSIENT})
export class ServiceService {
  constructor(/* Add @inject to inject parameters */
    test: TestDataSource
  ) { }

  /*
   * Add service methods here
   */
}
