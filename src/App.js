import './App.scss';
import React, { useEffect } from 'react'
import BtnCompletion from './components/BtnCompletion';
import Form from './components/Form';
import { useDispatch, useSelector } from 'react-redux'
import { fetchFormData, inputChange } from './actions/actionCreators';
import Suggestions from './components/Suggestions';
import Сonfirmation from './components/Сonfirmation';
import Modal from './components/Modal/Modal';

const App = () => {
  const { loading } = useSelector(state => state.fetchReducer)
  const { currentView } = useSelector(state => state.appReducer)

  const handleChange = (e) => {
    dispatch(inputChange(e.target.name, e.target.value))
}

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFormData())
  }, [dispatch])

  const setStep = (currentView) => {
    if (currentView === 'form') {
      return <Form handleChange={handleChange}/>
    } else if (currentView === 'suggestions') {
      return <Suggestions />
    } else if (currentView === 'info') {
      return <Сonfirmation />
    }
  }



  return (
    <>
      <div className="wrapper">
        <div className="wrapper__btn-completion">
          <BtnCompletion />
        </div>
        {loading ? 'Загрузка...' : setStep(currentView)}
      </div>
      <Modal handleChange={handleChange}/>
    </>
  );
}

export default App;
