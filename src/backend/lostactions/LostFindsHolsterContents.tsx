import React from 'react';

import '@css/ui/components/LostFindsHolsterContents.scss';
//import '@css/ui/components/LostActionsDivGen.scss';

import LostActions from './ActionData';
import IAction from '../interfaces/IAction';

import FancyGraphicSymbol from '@ui/pictures/BozjaLostFindsHolsterFancyGraphicForCategory.png';

import { AutomateSeparator } from '@backend/lostactions/LostActionsDivGen';


const LostFindsHolsterSeparator = AutomateSeparator();

function CreateLostFindsHolsterActionBox(LostAction : IAction) : React.JSX.Element {
    return (
        <div className="LostFindsHolsterActionBox">
                <div className="LostFindsHolsterActionBoxImage">
                    <img src={LostAction.category.EN == "Item-Related" ? LostAction.img : LostAction.imgBorder}></img>
                </div>
                <div className="LostFindsHolsterActionBoxName">
                    <span>{LostAction.name.EN}</span>
                </div>
        </div>
    )
}

const Testing : React.JSX.Element = 
<div className="LostFindsHolsterInnerContainer">
    <div className="LostFindsHolsterPlayerHolster">

        <div className="LostFindsHolsterActionCategoryOffensive  hidden">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Offensive</span>
            </div>
            {CreateLostFindsHolsterActionBox(LostActions.Offensive.LostFocus)}
            <div className="LostFindsHolsterActionBox">
                <div className="LostFindsHolsterActionBoxImage">
                    <img src={LostActions.Offensive.LostFontofPower.imgBorder}></img>
                </div>
                <div className="LostFindsHolsterActionBoxName">
                    <span>{LostActions.Offensive.LostFontofPower.name.EN}</span>
                </div>
            </div>
        </div>

        <div className="LostFindsHolsterActionCategoryDefensive  hidden">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Offensive</span>
            </div>
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