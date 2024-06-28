import Logo from './logo'
import { BarChart, CheckSquare, Cog, Flag, Home, LifeBuoy, SquareStack, Users } from 'lucide-react'
import NavItem from './navitem'
import UsedSpaceWidget from './UsedSpaceWidget'
import Profile from './Profile'
import Input from '../input'

function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input />

      <nav className="space-y-0.5">
        <NavItem titulo="Home" icon={Home} />
        <NavItem titulo="Dashboard" icon={BarChart} />
        <NavItem titulo="Projects" icon={SquareStack} />
        <NavItem titulo="Tasks" icon={CheckSquare} />
        <NavItem titulo="Reporting" icon={Flag} />
        <NavItem titulo="Users" icon={Users} />
      </nav>

      <div className="mt-28 flex flex-col gap-6">
        <nav className='space-y-0.5'>
          <NavItem titulo='Support' icon={LifeBuoy} />
          <NavItem titulo='Settings' icon={Cog} />
        </nav>
      </div>

      <div className='flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5'>
        <div className='space-y-1 '>
          <span className='text-sm/5 font-medium text-violet-700'>Used space</span>
          <p className='text-sm/5 text-violet-500 '>Your team has used 80% of your available space. need more ?</p>
        </div>
      </div>

      <div className='h-2 rounded-full bg-violet-100'>
        <div className='h-2 w-4/5 rounded-full bg-violet-600'></div>
      </div>

      <div className='space-x-3'>
        <button type='button' className='text-sm font-medium text-violet-500 hover:text-violet-700'>Dismiss</button>
        <button type='button' className='text-sm font-medium text-violet-500 hover:text-violet-700'>Upgrade plan</button>
      </div>

      <UsedSpaceWidget />

      <div className='h-px bg'>
        <Profile />
      </div>
    </aside>
  )
}

export default Sidebar
