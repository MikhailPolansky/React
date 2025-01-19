import {Link, NavLink} from 'react-router-dom'

export function Info() {
    return(
        <div className="inf">
        INFO

        <div className='link'>
            <NavLink to= 'users' className={({isActive, isPending}) => isActive ? 'active' : ''}>
                users
            </NavLink>

            <NavLink to= '/' className={({isActive, isPending}) => isActive ? 'active' : ''}>
                default
            </NavLink>

        </div>
        

        </div>
    )
}