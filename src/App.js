import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import News from './pages/News/News'
import Contacts from './pages/Contacts/Contacts'
import Layout from './components/Layout/Layout'
import {useFetch} from './hooks/hooks'

import './App.css'
import NewsDetail from './pages/NewsDetail/NewsDetail'


function App() {
  const result = useFetch()
  return (
    <div className="App">
       <Routes>
         <Route path = "/" element = {<Layout />}>
            <Route index element = {<Home data = {result} />} />
            <Route path = "/news" element = {<News data = {result} />} />
            <Route path = "/contacts" element = {<Contacts />} />
            <Route path = "/news/:name" element = {<NewsDetail />} />
            <Route path = "*" element = {<Home/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
