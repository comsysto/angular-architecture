export const html:string =
    `
    <div>
        <div class="card-deck container">
            <div class="row">
                <h2>Your chosen deck</h2>
                <div class="chosen-cards clearfix">
                    <ul data-ng-if="deckController.getChosenCards().length > 0">
                        <li data-ng-repeat="card in deckController.getChosenCards()">
                            <img data-ng-src="img/cards/{{ card.image }}"
                                alt="{{ card.name }}">
                        </li>
                    </ul>
                    <p data-ng-if="deckController.getChosenCards().length === 0">
                        You haven't chosen any cards for your deck yet.
                    </p>
                </div>
            </div>
        </div>
    </div>
    `
;
