describe('common.coFooter', () => {
    let $compile:angular.ICompileService,
        $rootScope:any,
        template:angular.IAugmentedJQuery,
        element:angular.IAugmentedJQuery;

    beforeEach(() => {
        angular.mock.module('common');

        inject((_$compile_:ng.ICompileService, _$rootScope_:ng.IRootScopeService) => {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });

    it('should render the header component', () => {
        template = angular.element('<div data-co-header></div>');
        element = $compile(template)($rootScope);

        $rootScope.$digest();
        expect(element.html()).toContain('<!-- common.coHeader -->');
    });

    it('should render the title text', () => {
        template = angular.element('<div data-co-header data-title-text="some foobar text"></div>');
        element = $compile(template)($rootScope);

        $rootScope.$digest();
        expect(element.html()).toContain('some foobar text');
    });
});
