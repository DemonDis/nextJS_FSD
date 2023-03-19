import { MonitorPanel } from '@/pagesLayer'

const Monitor = ({children}) => {
    return (
      <div className="m-4 h-full">
        <MonitorPanel />
        {children}
      </div>
    )
  }

  export default Monitor;