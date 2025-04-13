import React from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from '../atoms'

function App() {

  return <RecoilRoot>
    <MainApp/>
    </RecoilRoot>
 
  
}


function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const messageCount = useRecoilValue(messagingAtom)
  const notificationCount = useRecoilValue(notificationAtom)



  return (
    <div>
        <button>home</button>
        <button> my network ({networkNotificationCount>=100? "99+" : networkNotificationCount})</button>
        <button>Job({jobsCount>=100? "99+" : jobsCount})</button>
        <button>Message({messageCount>=100? "99+" : messageCount})</button>
        <button>Notifcation({notificationCount>=100? "99+" : notificationCount})</button>
        <button>You</button>
      
    </div>)
}


export default App