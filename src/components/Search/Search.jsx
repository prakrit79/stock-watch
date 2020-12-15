import './Search.css'
import {AiOutlineSearch} from 'react-icons/ai'

export const Search = (props) => {
    return(
        <form className='search-bar'>
            <input type="text" placeholder="Search" value={props.inputValue} onChange={props.onChange}/>
            <button type="submit" onClick={props.onSubmit}><AiOutlineSearch/></button>
        </form>
    )
}