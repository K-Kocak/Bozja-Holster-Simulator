import React from 'react';

import '@css/ui/components/LostFindsHolsterContents.scss';
//import '@css/ui/components/LostActionsDivGen.scss';

import FancyGraphicSymbol from '@ui/pictures/BozjaLostFindsHolsterFancyGraphicForCategory.png';

import { AutomateSeparator } from '@backend/lostactions/LostActionsDivGen';

const LostFindsHolsterSeparator = AutomateSeparator();


const Testing : React.JSX.Element = 
<div className="LostFindsHolsterInnerContainer">
    <div className="LostFindsHolsterPlayerHolster">

        <div className="LostFindsHolsterActionCategoryOffensive  hidden">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Offensive</span>
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