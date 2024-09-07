import '@css/ui/components/LostFindsHolsterContents.scss';
//import '@css/ui/components/LostActionsDivGen.scss';

import FancyGraphicSymbol from '@ui/pictures/BozjaLostFindsHolsterFancyGraphicForCategory.png';

import { AutomateSeparator } from '@backend/lostactions/LostActionsDivGen';

import CreateLostFindsHolsterActionBoxes from '@backend/lostactions/LostFindsHolsterActionBoxGen';
import { useAppSelector } from '../hooks';

const LostFindsHolsterSeparator = AutomateSeparator();

// action box gen

//console.log(LostFindsHolsterActionBoxes);
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
//{LostActionsAsObjectArray[LostActions.Offensive.LostFontofMagic.id].quantity > -1 ? LostFindsHolsterActionBoxes[LostActions.Offensive.LostFontofMagic.id] : <></>}
//{LostActionsAsObjectArray[LostActions.Offensive.LostFontofPower.id].quantity > -1 ? LostFindsHolsterActionBoxes[LostActions.Offensive.LostFontofPower.id] : <></>}

/*<div className="LostFindsHolsterActionCategoryOffensive hidden">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Offensive</span>
            </div>
        </div>
*/
export const LostFindsHolsterInformation = () => {   
    const currentWeight = useAppSelector((state) => state.LostFindsHolster.CurrentWeight);
    const selectedWeight = useAppSelector((state) => state.LostFindsHolster.SelectedWeight);
    const LostFindsHolsterActionBoxes = CreateLostFindsHolsterActionBoxes();
    const LostFindsHolsterActionCategoryCounts : number[] = Array<number>(7).fill(0);
    LostFindsHolsterActionBoxes.forEach((LostFindsHolsterActionBoxCategory, indexCategory : number) => {
        LostFindsHolsterActionBoxCategory.forEach((LostFindsHolsterActionBox) => {
            if(LostFindsHolsterActionBox.type == "div") {
                LostFindsHolsterActionCategoryCounts[indexCategory] += 1;
            }
        });
    });

    return <div className="LostFindsHolsterInnerContainer">
    <div className="LostFindsHolsterPlayerHolster">
        
        {LostFindsHolsterActionCategoryCounts[0] > 0 ? <div className="LostFindsHolsterActionCategoryOffensive">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Offensive</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[0]}

        {LostFindsHolsterActionCategoryCounts[1] > 0 ? <div className="LostFindsHolsterActionCategoryDefensive">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Defensive</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[1]}  

        {LostFindsHolsterActionCategoryCounts[2] > 0 ? <div className="LostFindsHolsterActionCategoryRestorative">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Restorative</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[2]} 

        {LostFindsHolsterActionCategoryCounts[3] > 0 ? <div className="LostFindsHolsterActionCategoryBeneficial">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Beneficial</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[3]}  

        {LostFindsHolsterActionCategoryCounts[4] > 0 ? <div className="LostFindsHolsterActionCategoryTactical">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Tactical</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[4]}  

        {LostFindsHolsterActionCategoryCounts[5] > 0 ? <div className="LostFindsHolsterActionCategoryDetrimental">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Detrimental</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[5]}  

        {LostFindsHolsterActionCategoryCounts[6] > 0 ? <div className="LostFindsHolsterActionCategoryItemRelated">
            <div className="LostFindsHolsterActionCategoryFancyGraphic">
                <img className="LostFindsHolsterActionCategoryFancyGraphicPicture" src={FancyGraphicSymbol}></img>
                <span className="LostFindsHolsterActionCategoryName">Item-Related</span>
            </div>
        </div> : <></>}
        {LostFindsHolsterActionBoxes[6]}  

    </div>
    {LostFindsHolsterSeparator}
    <div className="LostFindsHolsterWeightAndCapacityBox">

        <div className="LostFindsHolsterSelectedActionWeight">

            <div className="LostFindsHolsterSelectedActionWeightText">
                <span>Selected Action Weight</span>
            </div>

            <div className="LostFindsHolsterActionSelectedActionWeightDisplay">
                <span>{selectedWeight}</span>  
            </div>

            <div className="LostFindsHolsterSelectedActionWeightBlankSpace"></div>
            
        </div>

        <div className="LostFindsHolsterMaximumCapacity">

            <div className="LostFindsHolsterMaximumCapacityText">
                <span>Maximum Capacity</span>
            </div>

            <div className="LostFindsHolsterMaximumCapacityNumber">
                <span style={{color: currentWeight > 99 ? "#EE6A97" : "#F9CEA5",
                    textShadow: currentWeight > 99 ? "-1px 0px 1px #DC3C77, 1px 0px 1px #DC3C77, 0px 1px 1px #DC3C77, 0px -1px 1px #DC3C77" : "-1px 0px 1px #C07A3C, 1px 0px 1px #C07A3C, 0px 1px 1px #C07A3C, 0px -1px 1px #C07A3C"  
                }}>{currentWeight}</span>
            </div>

            <div className="LostFindsHolsterMaximumCapacity200">
                <span>/ 200</span>
            </div>  
        </div>  
    </div>
</div>
}
export default LostFindsHolsterInformation;