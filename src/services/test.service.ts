import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {TestDataSource} from '../datasources';

export interface Test {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
}

export class TestProvider implements Provider<Test> {
  constructor(
    // test must match the name property in the datasource json file
    @inject('datasources.test')
    protected dataSource: TestDataSource = new TestDataSource(),
  ) {}

  value(): Promise<Test> {
    return getService(this.dataSource);
  }
}
