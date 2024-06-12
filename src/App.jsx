import react from 'react'
import { RecoilRoot } from 'recoil'
import { useRecoilValue } from 'recoil'
import { JobsAtom, NetworkAtom ,MessagingAtom,NotificationAtom} from './Atoms'


function App(){
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}
function MainApp(){
  const NetworkCount = useRecoilValue(NetworkAtom)
  const JobsCount = useRecoilValue(JobsAtom)
  const MessagingCount = useRecoilValue(MessagingAtom)
  const NotificationCount = useRecoilValue(NotificationAtom)
  return(
    <>    
    <button> Home </button>
    
    <button> My Network ({ NetworkCount >= 100 ? "99+" : NetworkCount }) </button>
    <button> Jobs ({JobsCount}) </button>
    <button> Messaging ({MessagingCount}) </button>
    <button> Notifications ({NotificationCount}) </button>
    
    <button> Me </button>
    
    </>
  )

}


export default App