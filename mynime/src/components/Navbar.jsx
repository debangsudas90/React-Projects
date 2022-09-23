import { Stack } from "@mui/material"
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants'
import { MenuToggle, Searchbar } from './'

const Navbar = () => {
  return (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between', zIndex: "1"}}
    >
        <MenuToggle/>
        <Link to="/" >
            <img src={logo} alt="logo" height={55} />
        </Link>
        <Searchbar/>
    </Stack>
  )
}

export default Navbar