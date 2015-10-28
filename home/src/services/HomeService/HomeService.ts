import * as angular from 'angular';
import { IHomeService } from './IHomeService';

export default class HomeService implements IHomeService {
    constructor() {}

    returnFirstLetter(input:string):string {
        if (input && input.length > 0) {
            return input[0];
        }

        return '';
    }
}

