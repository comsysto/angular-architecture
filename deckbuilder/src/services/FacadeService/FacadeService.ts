import {IFacadeService} from './IFacadeService';
import {ICard} from '../../models/ICard';
import {IDataService} from '../DataService/IDataService';

export default class FacadeService implements IFacadeService {
    private dataService:IDataService;

    constructor(dataService:IDataService) {
        this.dataService = dataService;
    }

    public getFilteredCardList():ICard[] {
        return this.dataService.getFilteredCardList();
    }

    public getChosenCards():ICard[] {
        return this.dataService.getChosenCards();
    }

    public toggleCard(card:ICard):void {
        this.dataService.toggleCard(card);
    }

    public setFilter(filter:string):void {
        this.dataService.setFilter(filter);
    }

}

FacadeService.$inject = ['DataService'];
