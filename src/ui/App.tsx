
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
        <LostFindsCache />
        <LostFindsHolster />
        <SavedHolsters />
        <ForgottenFragmentInfo />
        <PrepopHolster />
        <LostActionInstanceTimelineResourceManagement />
        <LostActionInstanceTimeline /> 
      </div>
    </div>
  )
}

export default App
