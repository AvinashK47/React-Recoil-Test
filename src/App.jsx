import react, { useEffect } from 'react'
import { RecoilRoot, useRecoilState } from 'recoil'
import { useRecoilValue } from 'recoil'
import { notifications, TotalNotificationSelector} from './Atoms'

function App(){
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}
function MainApp(){

  const [NetworkCount,setNetworkCount] = useRecoilState(notifications);

  const TotalNotificationCount = useRecoilValue(TotalNotificationSelector);

  
  return(
    <>    
    <button> Home </button>
    
    <button> My Network ({ NetworkCount.network >= 100 ? "99+" : NetworkCount.network }) </button>
    <button> Jobs ({NetworkCount.jobs}) </button>
    <button> Messaging ({NetworkCount.messaging}) </button>
    <button> Notifications ({NetworkCount.notifications}) </button>
    
    <button> Me ({TotalNotificationCount}) </button>
    
    </>
  )

}


export default App