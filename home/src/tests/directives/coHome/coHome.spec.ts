import {IHomeService} from '../../../services/HomeService/IHomeService';
import HomeService from '../../../services/HomeService/HomeService';

describe('coHome', () => {
    let $compile:ng.ICompileService,
        $rootScope:any,
        homeServiceMock:IHomeService;

    beforeEach(() => {
        homeServiceMock = new HomeService();
        spyOn(homeServiceMock, 'returnFirstLetter').and.returnValue('mocked');

        angular.mock.module('homeApp', {
            HomeService: homeServiceMock
        });

        inject((_$compile_:ng.ICompileService, _$rootScope_:ng.IRootScopeService) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });

    it('should test a directive', () => {
        $rootScope.someInput = 'this is working';
        let template:angular.IAugmentedJQuery = angular.element('<div data-co-home data-testing="someInput"></div>');
        let element:angular.IAugmentedJQuery = $compile(template)($rootScope);

        $rootScope.$digest();
        expect(element.html()).toContain('this is working');
    });
});
