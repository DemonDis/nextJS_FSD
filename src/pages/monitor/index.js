import { MonitorPanel } from '@/pagesLayer'
import Link from 'next/link'

const Monitor = ({children}) => {
    return (
      <div className="m-4 h-full">
        <div className='m-2'>
          <Link href={{pathname: "/monitor/right"}}>right</Link> 
        </div>
        <div className='m-2'>
          <Link href={{pathname: "/monitor/left"}}>left</Link>
        </div>
        <MonitorPanel />
        {children}
      </div>
    )
  }

  export default Monitor;