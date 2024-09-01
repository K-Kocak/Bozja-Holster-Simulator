import React from 'react';

import '@css/ui/components/LostFindsHolsterContents.scss';
//import '@css/ui/components/LostActionsDivGen.scss';

import LostActions from './ActionData';
import IAction from '../interfaces/IAction';

import FancyGraphicSymbol from '@ui/pictures/BozjaLostFindsHolsterFancyGraphicForCategory.png';

import { AutomateSeparator } from '@backend/lostactions/LostActionsDivGen';

import CreateLostFindsHolsterActionBoxes from '@backend/lostactions/LostFindsHolsterActionBoxGen';

const LostFindsHolsterSeparator = AutomateSeparator();
const LostFindsHolsterActionBoxes = CreateLostFindsHolsterActionBoxes();

//when a button is clicked on the lost finds cache, we want to call this function with whatever action was pressed to create the element -- if and only if it hasn't been created yet. if it has been created, then we want to increase its quantity by 1 instead

// logic theory crafting:
// click add to holster, we need information on what action was clicked
// once we have that info, we need to check if it exists in the holster already
// assume it doesn't : we call the function below to create the HTML, then we add the HTML to the correct div depending on the category of the lost action
// that should be all we have to do when we add a lost action for the first time
// assume it does : increase quantity by 1, that should be it
// in both cases, we have to make sure the actions are ordered by ID

// to remove an action, you click on it.
// ingame this lowers the quantity by one, if you shift click though it does it in bigger chunks?
// when quantity hits 0, the div is removed, so we would have to somehow remove the div, perhaps out of an array

// ALTERNATIVE STRATEGY: we create all the divs for every action using the function below, similar to how we generate the lost action buttons.
// this automatically sorts out every single div's position relative to eachother, so the ID order is solved automatically
// we simply hide the action in question if its quantity is 0 (the default value), and if its quantity is bigger than 0, we display it
// so if we click on the action in the cache, quantity for the relevant action goes up by 1, if we click the action in the holster, quantity lowers by 1
// if quantity hits 0, it will automatically hide the div as quantity has hit 0.
// the only disadvantage of this approach is that we're generating 99 divs when its not necessary, but after that point the logic seems very straightforward afterwards?
// i will start off with the alternative strategy first.

// MOVED TO BOX GEN
/*function CreateLostFindsHolsterActionBox(LostAction : IAction) : React.JSX.Element {
    return (
        <div className="LostFindsHolsterActionBox">
                <div className="LostFindsHolsterActionBoxImage">
                    <span className="LostFindsHolsterActionBoxQuantity">{LostAction.quantity}</span>
                    <img src={LostAction.category.EN == "Item-Related" ? LostAction.img : LostAction.imgBorder}></img>
                </div>
                <div className="LostFindsHolsterActionBoxName">
                    <span>{LostAction.name.EN}</span>
                </div>
        </div>
    )
}*/



const Testing : React.JSX.Element = 
<div className="LostFindsHolsterInnerContainer">
    <div className="LostFindsHolsterPlayerHolster">

        <div className="LostFindsHolsterActionCategoryOffensive hidden">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Offensive</span>
            </div>
            {LostFindsHolsterActionBoxes[LostActions.Offensive.LostFontofMagic.id]}
            {LostFindsHolsterActionBoxes[LostActions.Offensive.LostFontofPower.id]}
        </div>

        <div className="LostFindsHolsterActionCategoryDefensive  hidden">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Offensive</span>
            </div>
            {LostFindsHolsterActionBoxes[LostActions.Offensive.LostFontofMagic.id]}
            {LostFindsHolsterActionBoxes[LostActions.Offensive.LostFontofPower.id]}
        </div>
        
    </div>
    {LostFindsHolsterSeparator}
    <div className="LostFindsHolsterActionWeightMaxCapacity">
        <div className="LostFindsHolsterActionWeight">
            
        </div>
        <div className="LostFindsHolsterMaxCapacity">

        </div>
    </div>
    
</div>

export default Testing;