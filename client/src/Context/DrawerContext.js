import React, {useState, useMemo, createContext} from 'react'

export const SidebarContext = createContext();

function DrawerContext({children}) {
    const [mobileDrawer, setMobileDrawer] = useState(false)
    const [progress, setprogress] = useState(0)
    const toggleDrawer = () => setMobileDrawer(!mobileDrawer)
    const value = useMemo(() => ({ mobileDrawer, toggleDrawer, progress, setprogress }), [mobileDrawer, progress])
  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}

export default DrawerContext