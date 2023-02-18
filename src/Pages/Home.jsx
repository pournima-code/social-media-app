import Topbar from '../Components/Topbar/Topbar'
import RightSideBar from '../Components/RightSideBar/RightSideBar'
import Feed from '../Components/Feed/Feed'
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar'

import './Home.css'

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <LeftSideBar />
        <Feed />
        <RightSideBar />
      </div>
    </>
  )
}
