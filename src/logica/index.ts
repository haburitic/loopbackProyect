import {Component} from '@loopback/core';

export class MyComponent implements Component {

    constructor() {

    }

    sumar(): number {
        return 1 + 2;
    }
}
