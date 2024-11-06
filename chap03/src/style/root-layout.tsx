import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'

const RootLayout = () => {
  return (
    <Root>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </div>
    </Root>
  )
}

export default RootLayout

const Root = styled.div`
  width: 100%;
`

const OutletWrapper = styled.div`
  width: 100%;
`
