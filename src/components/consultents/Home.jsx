import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchConsultents, searchConsultent } from '../../features/consultents/consultentSlice'
import { ConsultentListStyle } from './consultents.style'
import Navbar from '../molecules/Navbar'
import Cards from '../molecules/Cards'
import { SearchStyle } from './consultents.style'
import { useState } from 'react'
function Home() {
    const [selectedOption, setSelectedOption] = useState('');
    const [skillInput, setSkillInput] = useState('')
    const dispatch = useDispatch()
    const {consultent_data, isLoading, iserror} = useSelector((state) =>({
      ...state.consultent
    }))
    console.log(consultent_data)
    useEffect(() =>{
        dispatch(fetchConsultents())
    } ,[dispatch])

    const handleChangeSkill = (event) =>{
      setSkillInput(event.target.value)
      dispatch(searchConsultent(event.target.value))
    }
    const handleChangeLanguage = (event) =>{
      dispatch(searchConsultent(event.target.value))
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
           <select value={setSelectedOption} onChange={handleChangeLanguage} id="myDropdown">
                <option value="option1">English</option>
                <option value="option2">50 + consultations</option>
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
              <div class="checkbox-container">
              <input type="checkbox" id="myCheckbox" class="checkbox-input"/>
              <label for="myCheckbox">Enginnering</label>
              </div>
              <div class="checkbox-container">
              <input type="checkbox" id="myCheckbox" class="checkbox-input"/>
              <label for="myCheckbox">Business</label>
              </div>
              <div class="checkbox-container">
              <input type="checkbox" id="myCheckbox" class="checkbox-input"/>
              <label for="myCheckbox">Music</label>
                </div>
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
                {isLoading ? <h3>Loading</h3> : (consultent_data && consultent_data.map((data) =>(
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
