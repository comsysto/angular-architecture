import {IUIStateService} from './IUIStateService';

export default class UIStateService implements IUIStateService {
    private uiStateModel:UIStateModel;

    constructor() {
        this.uiStateModel = new UIStateModel();

        // init data model
        this.uiStateModel.setNewDeckFormShown(false);
    }

    public setShowNewDeckForm(isShown:boolean):void {
        this.uiStateModel.setNewDeckFormShown(isShown);
    }

    public getShowNewDeckForm():boolean {
        return this.uiStateModel.getNewDeckFormShown();
    }
}

class UIStateModel {
    private newDeckFormShown:boolean;

    public getNewDeckFormShown():boolean {
        return this.newDeckFormShown;
    }

    public setNewDeckFormShown(isShown:boolean):void {
        this.newDeckFormShown = isShown;
    }
}
