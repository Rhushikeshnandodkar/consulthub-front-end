import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchConsultents, filterConsultents, searchConsultent } from '../../features/consultents/consultentSlice'
import { ConsultentListStyle } from './consultents.style'
import Navbar from '../molecules/Navbar'
import Cards from '../molecules/Cards'
import { SearchStyle } from './consultents.style'
import { useState } from 'react'
import Loader from '../molecules/Loader'
import { fetchCategories, fetchLanguages } from '../../features/consultents/fetchselect'
function Home() {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedSkill, setSelectedSkill] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [skillInput, setSkillInput] = useState('')
    const dispatch = useDispatch()
    const {consultent_data, isLoading, iserror} = useSelector((state) =>({
      ...state.consultent
    }))
    const {languages, loading, category} = useSelector((state) =>({
      ...state.selects
    }))
    // const {}
    useEffect(() =>{
        dispatch(fetchConsultents())
        dispatch(fetchLanguages())
        dispatch(fetchCategories())
    } ,[dispatch])

    const handleChangeSkill = (event) =>{
      setSelectedLanguage("")
      setSkillInput(event.target.value)
      dispatch(searchConsultent(event.target.value))
    }
    const handleChangeLanguage = (event) =>{
      console.log(event.target.value)
      setSkillInput("")
      dispatch(filterConsultents(event.target.value))
      setSelectedLanguage(event.target.value)
    }
    console.log("check box is" , isChecked)
    const handleCheckBoxChange = () =>{
      setIsChecked(!isChecked)
    }
  return (
    <div>
      <ConsultentListStyle>
        <Navbar/>
        <SearchStyle>
    <div>
      <div className="search-bar">
        <div className="search-field">
           <div className="input-language">
           <select value={selectedLanguage} onChange={handleChangeLanguage} id="myDropdown">
           {loading ?  <h4>loading</h4>: (category && category.map((data) =>(
                  <>
                   <option value="" selected disabled hidden>Category</option>
               <option value={`${data.cateogry_field}`}>{data.cateogry_field}</option>
                  </>
                )))}
              </select>
              
           </div>
            <div className="input-skill">
            <input value={skillInput} onChange={handleChangeSkill} type="text" placeholder='  Search Ttitle'/>
            </div>
        </div>
        {/* <div className="button-section"><button className='btn'>Search</button></div> */}
      </div>
    </div>
    </SearchStyle>
        <div className="main-section">
          <div className="cards-section">
            <div className="all-cards">
              <div className="cards-list">
                {isLoading ? <Loader/> : (consultent_data && consultent_data.map((data) =>(
                  <>
                <Cards data={data}/>
                  </>
                )))}
              </div>
            </div>
          </div>
        </div>
      </ConsultentListStyle>
    </div>
  )
}

export default Home
