import {IUIStateService} from '../../../services/UIStateService/IUIStateService';
import UIStateService from '../../../services/UIStateService/UIStateService';

describe('deckmanager.UIStateService', () => {
    let uiStateService:IUIStateService;

    beforeEach(() => {
        uiStateService = new UIStateService();
    });

    it('should set if new deck form should be shown to false initially', () => {
        expect(uiStateService.getShowNewDeckForm()).toBeFalsy();
    });

    it('should set and get if new deck form should be shown', () => {
        uiStateService.setShowNewDeckForm(true);
        expect(uiStateService.getShowNewDeckForm()).toBeTruthy();
    });
});
