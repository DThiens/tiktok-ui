import { useContext } from 'react'

import {ThemeContext} from './App'


function Pharagraph () {

    const theme = useContext(ThemeContext)
    return (
        <p className = {theme}>
            This is the paragraph
        </p>
    )
}

export default Pharagraph