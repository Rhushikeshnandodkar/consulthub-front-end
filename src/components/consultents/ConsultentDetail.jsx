import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSingleConsultent } from '../../features/consultents/consultentSlice'
function ConsultentDetail() {
  const {id} = useParams()
  const {singleconsultent, isLoading} = useSelector((state) =>({
    ...state.consultent
  }))
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchSingleConsultent(id))
  }, [dispatch])
  return (
    <div>
      {!singleconsultent || isLoading && (
        <h3>Loading...</h3>
      )
      }
      {singleconsultent && !isLoading && (
        <h3>{singleconsultent.consultent_name}</h3>
      )
      }
    </div>
  )
}

export default ConsultentDetail
