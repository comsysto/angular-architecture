import {IFacadeService} from './IFacadeService';
import {ICard} from '../../../common/models/ICard';
import {IDataService} from '../DataService/IDataService';
import {IDeck} from '../../../common/models/IDeck';

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

    public getDeck():IDeck {
        return this.dataService.getDeck();
    }

    public toggleCard(card:ICard):void {
        this.dataService.toggleCard(card);
    }

    public setFilter(filter:string):void {
        this.dataService.setFilter(filter);
    }

    public backToManager():void {
        this.dataService.backToManager();
    }
}

FacadeService.$inject = ['DataService'];
