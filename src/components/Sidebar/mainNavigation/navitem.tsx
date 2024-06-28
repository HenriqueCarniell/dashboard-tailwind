import { ChevronDown, Home } from 'lucide-react'
import { title } from 'process'
import { ElementType } from 'react'

export interface NavItemProps {
    titulo: string,
    icon: ElementType
}

function NavItem({titulo, icon: Icon}: NavItemProps) {
    return (
        <nav className="space-y-0.5">
            <a href='' 
            className='flex group items-center justify-between gap-3 rounded px-3 py-2 hover:bg-violet-50'>
                <div className='flex items-center gap-3'>
                    <Icon className="h-5 w-5 text-zinc-500" />
                    <span className="font-medium text-zinc-700 group-hover:text-violet-500">{titulo}</span>
                </div>
                <ChevronDown className="h-5 w-5 text-zinc-480 group-hover:text-violet-300"/>
            </a>
        </nav>
    )
}

export default NavItem
