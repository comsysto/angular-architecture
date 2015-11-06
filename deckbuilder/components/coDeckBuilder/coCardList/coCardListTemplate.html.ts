export const html:string =
    `
    <div>
        <!-- deckbuilder.coCardList -->
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                    <h2>Card gallery</h2>
                </div>
                <div class="col-xs-6">
                    <div class="pull-right" data-co-card-list-filter></div>
                </div>
            </div>
            <div class="card-list row">
                <div data-ng-repeat="card in cardListController.getCardList()"
                    data-ng-click="cardListController.toggleCard(card)"
                    class="card text-center col-xs-12 col-sm-4 col-md-3 col-lg-2">
                    <p data-ng-class="{ 'selected': card.selected }" class="card-item">
                        <img data-ng-src="img/cards/{{ card.image }}"
                        alt="{{ card.name }}">
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;

