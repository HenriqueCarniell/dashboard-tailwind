import { BarChart, CheckSquare, Flag, Home, SquareStack, Users } from 'lucide-react'
import NavItem from './navitem'

function MainNavigation() {
    return (
        <nav className="space-y-0.5">
            <NavItem titulo="Home" icon={Home} />
            <NavItem titulo="Dashboard" icon={BarChart} />
            <NavItem titulo="Projects" icon={SquareStack} />
            <NavItem titulo="Tasks" icon={CheckSquare} />
            <NavItem titulo="Reporting" icon={Flag} />
            <NavItem titulo="Users" icon={Users} />
        </nav>
    )
}

export default MainNavigation
