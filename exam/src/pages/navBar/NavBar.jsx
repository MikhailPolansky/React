import { NavLink } from "react-router-dom";

export function NavBar () {
    return (
        <div className="nav">

          <NavLink to="/musicPlayer" className={({isActive,isPending}) => isActive ? 'active' : ''}>
            music player
          </NavLink>

          <NavLink to="/trackList" className={({isActive,isPending}) => isActive ? 'active' : ''}>
          track list
          </NavLink>

          <NavLink to="/search" className={({isActive,isPending}) => isActive ? 'active' : ''}>
          search
          </NavLink>

          <NavLink to="/history" className={({isActive,isPending}) => isActive ? 'active' : ''}>
          history
          </NavLink>

          <NavLink to="/info" className={({isActive,isPending}) => isActive ? 'active' : ''}>
          info
          </NavLink>

        </div>
    )
}