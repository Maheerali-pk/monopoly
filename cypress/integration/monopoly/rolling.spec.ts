describe("Rolling System", function () {
   //TO CHECK BUTTON DISABLING
   it("disables button correctly", function () {
      cy.visit("localhost:3000").then(() => {
         //To keep track of roll button
         let isRollDisabled = false;

         for (let i = 0; i < 10; i++) {
            cy.wait(100).then(() => {
               //End turn
               if (isRollDisabled) {
                  cy.get(".btn-end-turn").click();
                  isRollDisabled = false;
               }

               //Roll the die
               else {
                  cy.get(".btn-roll")
                     .click()
                     .then((x) => {
                        //Get both the rolls
                        let roll1: number;
                        let roll2: number;
                        cy.get(".dice").then((dices) => {
                           roll1 = dices[0].children.length;
                           roll2 = dices[1].children.length;

                           //Rolls not equal
                           if (roll1 !== roll2) {
                              cy.get(".btn-roll").should("be.disabled");
                              isRollDisabled = true;
                           } else {
                              cy.get(".btn-roll").should("not.be.disabled");
                           }
                        });
                     });
               }
            });
         }
      });
   });

   //Check the movement
   it("Moves correctly", function () {
      cy.visit("localhost:3000").then(() => {
         let isRollDisabled = false;
         let oldPositions: number[] = [];

         for (let i = 0; i < 10; i++) {
            cy.wait(100).then(() => {
               let activeTurn: number;
               let totalRoll: number;

               //End turn
               if (isRollDisabled) {
                  cy.get(".btn-end-turn").click();
                  isRollDisabled = false;
               }

               //Roll die
               else {
                  cy.get(".btn-roll")
                     .click()
                     .then((x) => {
                        //Get the total roll
                        let roll1: number;
                        let roll2: number;
                        cy.get(".dice").then((dices) => {
                           roll1 = dices[0].children.length;
                           roll2 = dices[1].children.length;
                           totalRoll = roll1 + roll2;

                           //Disable button if no doubles are rolled
                           if (roll1 !== roll2) {
                              isRollDisabled = true;
                           }

                           //Get the tab head elements
                           cy.get(".player-tab-head").then((playerTabHeads) => {
                              //Fill old positions is empty fill it with 0's
                              if (oldPositions.length === 0) {
                                 oldPositions = Array(
                                    playerTabHeads.length
                                 ).fill(0);
                              }

                              //Get the active turn by class active.
                              activeTurn = playerTabHeads
                                 .toArray()
                                 .findIndex((x) =>
                                    x.classList.contains("active")
                                 );

                              //Get the active piece
                              cy.get(`.piece.small.piece-${activeTurn}`).then(
                                 (activePiece) => {
                                    //Get the tile no of active player using parent node
                                    let tileNoOfActivePiece = ((activePiece.toArray()[0]
                                       .parentNode as HTMLElement)
                                       .parentNode as HTMLElement).dataset
                                       .tileno as string;

                                    //Calculate the new expected position
                                    let newPosition =
                                       (oldPositions[activeTurn] + totalRoll) %
                                       39;

                                    //Update the old position with new one for active player
                                    oldPositions[activeTurn] = newPosition;

                                    //Test if new position is same as expected.
                                    cy.wait(100).then((x) => {
                                       expect(+tileNoOfActivePiece).to.be.equal(
                                          newPosition
                                       );
                                    });
                                 }
                              );
                           });
                        });
                     });
               }
            });
         }
      });
   });
});
