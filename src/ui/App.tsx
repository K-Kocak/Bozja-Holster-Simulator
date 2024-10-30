
import LostActions from '@backend/lostactions/actiondata/ActionData';

import divToPlace from '../backend/lostactions/LostActionDescriptionGrinder';

import '@css/App.scss';

import LostFindsCache from '@ui/components/LostFindsCache';
import LostFindsHolster from '@ui/components/LostFindsHolster';
import SavedHolsters from '@ui/components/SavedHolsters';
import ForgottenFragmentInfo from '@ui/components/ForgottenFragmentInfo';
import PrepopHolster from '@ui/components/PrepopHolster';
import LostActionInstanceTimeline from '@ui/components/LostActionInstanceTimeline';
import LostActionInstanceTimelineResourceManagement from '@ui/components/LostActionInstanceTimelineResourceManagement';

function App() {
  
  return (
    <div className="AppContainer">
      <div className="ComponentsContainer">
        <div className="ComponentContainerLostFindsCacheAndForgottenFragmentInfo">
          <LostFindsCache />
          <ForgottenFragmentInfo />
        </div>
        <div className="ComponentContainerEverythingElse">
          <div className="ComponentContainerLostFindsHolsterAndSavedHolsters">
            <LostFindsHolster />
            <SavedHolsters />
          </div>
          <div className="ComponentContainerPrepopAndTimelineComponents">
            <div className="ComponentContainerPrepopAndResourceManagement">
              <PrepopHolster />
              <LostActionInstanceTimelineResourceManagement />
            </div>
            <div className="ComponentContainerInstanceTimeline">
              <LostActionInstanceTimeline /> 
            </div>
            
          </div>  
        </div>
        
      </div>
    </div>
  )
}

export default App
