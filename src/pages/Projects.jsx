// Projects Screen with ProjectImage component

import ProjectImage from '../components/ProjectImage'

export default function Projects() {
    return (
      <div class="flex justify-center items-center flex-col pt-20 pb-40">
        <h2 class="text-4xl font-bold mb-14">Projects</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-3 gap-10">
          <ProjectImage description="Overview Dashboard with Bootstrap" img="lacetkjviipluour2us2"/>
          <ProjectImage description="Jetski Rental App" img="suvhhvntriqvpnwhqnav"/>
          <ProjectImage description="ActiveMinds Sign Up Page" img="wugfebcpn3evnumxbksq"/>
          <ProjectImage description="MeetMate - Friend Scheduling App Study" img="zuhntsrxldrad8fvaip7"/>
          <ProjectImage description="Crypto Portfolio Tracker App Design" img="kxw9lzsfvkzzovywjock"/>
          <ProjectImage description="Kindle Paperwhite Simulator" img="a4vraoz70ghjlk2qlhze"/>
        </div>
      </div>
    );
  }
  