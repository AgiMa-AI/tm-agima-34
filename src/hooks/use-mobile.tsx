
import * as React from "react"

const MOBILE_BREAKPOINT = 768
const MOBILE_LANDSCAPE_MIN_WIDTH = 480
const TABLET_BREAKPOINT = 1024

type DeviceType = 'mobile' | 'tablet' | 'desktop'
type OrientationType = 'portrait' | 'landscape'

interface MobileContextType {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  deviceType: DeviceType
  orientation: OrientationType
  resetLayout: boolean
  toggleResetLayout: () => void
}

const MobileContext = React.createContext<MobileContextType>({
  isMobile: false,
  isTablet: false, 
  isDesktop: true,
  deviceType: 'desktop',
  orientation: 'portrait',
  resetLayout: false,
  toggleResetLayout: () => {}
})

export const MobileProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = React.useState(false)
  const [isTablet, setIsTablet] = React.useState(false)
  const [orientation, setOrientation] = React.useState<OrientationType>('portrait')
  const [resetLayout, setResetLayout] = React.useState(false)
  
  const toggleResetLayout = React.useCallback(() => {
    setResetLayout(prev => !prev)
  }, [])
  
  React.useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setIsMobile(width < MOBILE_BREAKPOINT)
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT)
      setOrientation(width > height ? 'landscape' : 'portrait')
    }
    
    updateDeviceType()
    
    const mqlMobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const mqlTablet = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px) and (max-width: ${TABLET_BREAKPOINT - 1}px)`)
    const mqlOrientation = window.matchMedia("(orientation: landscape)")
    
    const handleMobileChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsMobile(true)
        setIsTablet(false)
      } else {
        updateDeviceType()
      }
    }
    
    const handleTabletChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsMobile(false)
        setIsTablet(true)
      } else {
        updateDeviceType()
      }
    }
    
    const handleOrientationChange = (e: MediaQueryListEvent) => {
      setOrientation(e.matches ? 'landscape' : 'portrait')
    }
    
    mqlMobile.addEventListener("change", handleMobileChange)
    mqlTablet.addEventListener("change", handleTabletChange)
    mqlOrientation.addEventListener("change", handleOrientationChange)
    
    window.addEventListener('resize', updateDeviceType)
    
    return () => {
      mqlMobile.removeEventListener("change", handleMobileChange)
      mqlTablet.removeEventListener("change", handleTabletChange)
      mqlOrientation.removeEventListener("change", handleOrientationChange)
      window.removeEventListener('resize', updateDeviceType)
    }
  }, [])
  
  const deviceType: DeviceType = React.useMemo(() => {
    if (isMobile) return 'mobile'
    if (isTablet) return 'tablet'
    return 'desktop'
  }, [isMobile, isTablet])
  
  const value = React.useMemo(() => ({
    isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
    deviceType,
    orientation,
    resetLayout,
    toggleResetLayout,
  }), [isMobile, isTablet, deviceType, orientation, resetLayout, toggleResetLayout])
  
  return (
    <MobileContext.Provider value={value}>
      {children}
    </MobileContext.Provider>
  )
}

export const useMobile = () => {
  const context = React.useContext(MobileContext)
  if (context === undefined) {
    throw new Error("useMobile must be used within a MobileProvider")
  }
  return context
}

// Legacy compatibility hook
export function useIsMobile() {
  const { isMobile } = useMobile()
  return isMobile
}
