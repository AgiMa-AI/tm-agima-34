
import React from 'react'
import { useMobile } from '@/hooks/use-mobile'
import { Button } from '@/components/ui/button'
import { LayoutGrid, X, Rows, Columns } from 'lucide-react'
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from '@/components/ui/drawer'

interface MobileLayoutOption {
  id: string
  name: string
  icon: React.ReactNode
  description: string
}

const LayoutPreset = ({ option, active, onClick }: { 
  option: MobileLayoutOption
  active: boolean
  onClick: () => void 
}) => {
  return (
    <div 
      className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
        active ? 'border-primary bg-primary/5' : 'border-muted'
      }`}
      onClick={onClick}
    >
      <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center mb-2">
        {option.icon}
      </div>
      <div className="text-center">
        <h3 className="font-medium text-sm">{option.name}</h3>
        <p className="text-xs text-muted-foreground">{option.description}</p>
      </div>
    </div>
  )
}

const MobileLayoutReset = () => {
  const { isMobile, toggleResetLayout } = useMobile()
  const [open, setOpen] = React.useState(false)
  const [activeLayout, setActiveLayout] = React.useState<string>('default')
  
  if (!isMobile) return null
  
  const layoutOptions: MobileLayoutOption[] = [
    {
      id: 'default',
      name: '标准布局',
      icon: <LayoutGrid className="h-5 w-5" />,
      description: '默认卡片视图'
    },
    {
      id: 'compact',
      name: '紧凑布局',
      icon: <Rows className="h-5 w-5" />,
      description: '列表式的紧凑视图'
    },
    {
      id: 'detailed',
      name: '详细布局',
      icon: <Columns className="h-5 w-5" />,
      description: '显示更多数据'
    }
  ]
  
  const handleLayoutChange = (layoutId: string) => {
    setActiveLayout(layoutId)
    localStorage.setItem('preferred-mobile-layout', layoutId)
    toggleResetLayout()
    setOpen(false)
  }
  
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button 
          variant="secondary"
          size="icon"
          className="mobile-layout-reset tiffany-shadow"
        >
          <LayoutGrid className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">调整移动端布局</h2>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </DrawerClose>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          {layoutOptions.map(option => (
            <LayoutPreset
              key={option.id}
              option={option}
              active={activeLayout === option.id}
              onClick={() => handleLayoutChange(option.id)}
            />
          ))}
        </div>
        
        <p className="text-xs text-muted-foreground mt-4 text-center">
          选择适合您的布局方式，使其更符合移动设备的显示需求
        </p>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileLayoutReset
