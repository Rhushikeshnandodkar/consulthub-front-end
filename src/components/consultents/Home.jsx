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
           {loading ?  <h4>loading</h4>: (languages && languages.map((data) =>(
                  <>
                   <option value="" selected disabled hidden>Choose Language</option>
               <option value={`${data.language_field}`}>{data.language_field}</option>
               
                  </>
                )))}
              </select>
              
           </div>
            <div className="input-skill">
            <input value={skillInput} onChange={handleChangeSkill} type="text" placeholder='Search Skill'/>
            </div>
        </div>
        {/* <div className="button-section"><button className='btn'>Search</button></div> */}
      </div>
    </div>
    </SearchStyle>
        <div className="main-section">
          <div className="filters-section">
            <div className="filter-box">
              <h3>Filters</h3>
              <div className="category-input">
                <label htmlFor="">Search By Category</label> <br />
                <input type="text" placeholder='Enter Category'/>
              </div>
              <div className="booleans">

              {loading ?  <h4>loading</h4>: (category && category.map((data) =>(
                  <>
               <div class="checkbox-container">
               <label for="myCheckbox" key={data.cateogry_field}>
              <input type="checkbox" value={isChecked} onChange={handleCheckBoxChange} id="myCheckbox" class="checkbox-input"/>
              {data.cateogry_field}</label>
              </div>
                  </>
                )))}

              <div className="dropdowns">
              <div className="dropdown-container">
              <label for="myDropdown">Sort By :</label> <br />
              <select id="myDropdown">
                <option value="option1">Reviews</option>
                <option value="option2">Rating</option>
                <option value="option3">Pricing</option>
                <option value="option3">Consultations</option>

              </select>
              </div>
              <div className="dropdown-container">
              <label for="myDropdown">No. of consultations:</label> <br />
              <select id="myDropdown">
                <option value="option1">25 + consultations</option>
                <option value="option2">50 + consultations</option>
              </select>
              </div>
              </div>
              </div>
            </div>
          </div>
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
