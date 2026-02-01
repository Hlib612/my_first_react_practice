import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const colors = [
  { id: "id-1", name: "black" },
  { id: "id-2", name: "white" },
  { id: "id-3", name: "gray" },
];


function Task(temperature){
  return (
    <>
    <h1>Вітаю на моїй сторінц</h1>
    <p>Це перший параграф мого документа</p>
    <img src='https://segredosdomundo.r7.com/wp-content/uploads/2022/04/quem-e-cratos-o-tita-da-mitologia-grega-que-inspirou-god-of-war-e1649462976465.jpg'></img>
    <ul>{colors.map((color) => (<li key={color.id}>{color.name}</li>))}</ul>
    <a href='https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zDJKSy8rSMk1YPSSv9h4Yf_FaRd2XthzYcPFpgs7FC7surAByN0C5HZc2AAALd0bQQ&q=%D1%81%D0%BF%D1%96%D0%B9%D0%BC%D0%B0%D1%82%D0%B8+%D0%BA%D0%B0%D0%B9%D0%B4%D0%B0%D1%88%D0%B0&rlz=1C1GTPM_enUA1184UA1184&oq=%D1%81%D0%BF%D1%96&gs_lcrp=EgZjaHJvbWUqCggDEC4YsQMYgAQyBggAEEUYOTIGCAEQABgDMgcIAhAAGIAEMgoIAxAuGLEDGIAEMg0IBBAuGIMBGLEDGIAEMgoIBRAuGLEDGIAEMgoIBhAuGLEDGIAEMg0IBxAuGIMBGLEDGIAEMgoICBAAGLEDGIAEMgcICRAAGIAE0gEJODQ1NmowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8'>Look</a>
    <p>
        Погода сьогодні: {temperature >= 20 ? "На вулиці тепло" : "На вулиці прохолодно"}
      </p>
    </>
  )
}

function App(){
  return (
    <>
    <h1>My favorite books</h1>
    <ul>
      {favouriteBooks.map((book => (<li key={book.id}>{book.name}</li>)))}
    </ul>
    <Task temperature={10}/>
    </>
  )
}

export default App
