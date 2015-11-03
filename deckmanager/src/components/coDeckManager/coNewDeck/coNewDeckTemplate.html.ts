export const html:string =
    `
        <div>
            <div class="container" data-ng-show="newDeckController.isFormShown()">
                <div class="row">
                    <div class="col-xs-12">
                        <h2>Add new deck</h2>
                        <div class="well">
                            <input type="text" data-ng-model="newDeckController.deckName">
                            <span class="btn btn-info" data-ng-click="newDeckController.createNewDeck()">Create new deck</span>
                            <span class="btn btn-danger" data-ng-click="newDeckController.hideNewDeckForm()">Cancel</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    `;
