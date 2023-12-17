import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchConsultents } from '../../features/consultents/consultentSlice'
import { ConsultentListStyle } from './consultents.style'
import Navbar from '../molecules/Navbar'
import Search from '../molecules/Search'
function Home() {
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchConsultents())
    } ,[dispatch])
  return (
    <div>
      <ConsultentListStyle>
        <Navbar/>
        <Search/>
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
              <label for="myCheckbox">Check me</label>
              </div>
              <div class="checkbox-container">
              <input type="checkbox" id="myCheckbox" class="checkbox-input"/>
              <label for="myCheckbox">Check me</label>
              </div>
              <div class="checkbox-container">
              <input type="checkbox" id="myCheckbox" class="checkbox-input"/>
              <label for="myCheckbox">Check me</label>
                </div>
              <div className="dropdown-container">
              <label for="myDropdown">Choose an option:</label> <br />
              <select id="myDropdown">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              </div>
              <div className="drowpdown-container">
              <label for="myDropdown">Choose an option:</label> <br />
              <select id="myDropdown">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              </div>
              </div>
            </div>
          </div>
          <div className="cards-section">heo</div>
        </div>
      </ConsultentListStyle>
    </div>
  )
}

export default Home
