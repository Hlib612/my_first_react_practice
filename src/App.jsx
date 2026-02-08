import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import User from './User.jsx'

// const favouriteBooks = [
//   { id: "id-1", name: "JS for beginners" },
//   { id: "id-2", name: "React basics" },
//   { id: "id-3", name: "React Router overview" },
//   { id: "id-4", name: "Redux in depth" },
// ];

// const colors = [
//   { id: "id-1", name: "black" },
//   { id: "id-2", name: "white" },
//   { id: "id-3", name: "gray" },
// ];

// const userData = {
//   name: "Hlib",
//   age: 16,
//   photo:
//     "https://img.freepik.com/premium-photo/corporate-portrait-proud-with-business-man-office-start-professional-career-as-intern-company-confident-suit-with-smile-formal-employee-workplace-administration_590464-381909.jpg?semt=ais_hybrid&w=740&q=80",
// };

// const usersList = [
//   {
//     name: "Hlib",
//     age: 16,
//     photo:
//       "https://img.freepik.com/premium-photo/corporate-portrait-proud-with-business-man-office-start-professional-career-as-intern-company-confident-suit-with-smile-formal-employee-workplace-administration_590464-381909.jpg?semt=ais_hybrid&w=740&q=80",
//   },
// ];

// // function User(client){
// //       console.log(client.age)
// //   return(
// //     <>
// //     <p>{client.name}</p>
// //     <p>{client.age}</p>
// //     <img src={client.photo}/>
// //     </>
// //   )
// // }

// function ShowUsers(client) {
//   console.log(client)
//   return (
//     <>
//       <ul>
//         {client.map((user) => (
//           <li>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// function Task(temperature) {
//   return (
//     <>
//       <h1>Вітаю на моїй сторінц</h1>
//       <p>Це перший параграф мого документа</p>
//       <img src="https://segredosdomundo.r7.com/wp-content/uploads/2022/04/quem-e-cratos-o-tita-da-mitologia-grega-que-inspirou-god-of-war-e1649462976465.jpg"></img>
//       <ul>
//         {colors.map((color) => (
//           <li key={color.id}>{color.name}</li>
//         ))}
//       </ul>
//       <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zDJKSy8rSMk1YPSSv9h4Yf_FaRd2XthzYcPFpgs7FC7surAByN0C5HZc2AAALd0bQQ&q=%D1%81%D0%BF%D1%96%D0%B9%D0%BC%D0%B0%D1%82%D0%B8+%D0%BA%D0%B0%D0%B9%D0%B4%D0%B0%D1%88%D0%B0&rlz=1C1GTPM_enUA1184UA1184&oq=%D1%81%D0%BF%D1%96&gs_lcrp=EgZjaHJvbWUqCggDEC4YsQMYgAQyBggAEEUYOTIGCAEQABgDMgcIAhAAGIAEMgoIAxAuGLEDGIAEMg0IBBAuGIMBGLEDGIAEMgoIBRAuGLEDGIAEMgoIBhAuGLEDGIAEMg0IBxAuGIMBGLEDGIAEMgoICBAAGLEDGIAEMgcICRAAGIAE0gEJODQ1NmowajE1qAIAsAIA&sourceid=chrome&ie=UTF-8">
//         Look
//       </a>
//       <p>
//         Погода сьогодні:{" "}
//         {temperature >= 20 ? "На вулиці тепло" : "На вулиці прохолодно"}
//       </p>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <h1>My favorite books</h1>
//       <ul>
//         {favouriteBooks.map((book) => (
//           <li key={book.id}>{book.name}</li>
//         ))}
//       </ul>
//       <Task temperature={10} />
//       {/* <User client={userData}/> */}
//       <ShowUsers client={usersList} />
//     </>
//   );
// }

// export default App;


const UserProfile = ({data}) => {
  return(
    <>
    <p>{data.name}</p>
    <p>{data.experience}</p>
    <p>{data.email}</p>
    <p>{data.position}</p>
    </>
  )
}

const App = () => {
  const developer = {
    name: "Олексій Петренко",
    email: "oleksii@example.com",
    position: "Senior React Developer",
    experience: "5 років"
  };

  const designer = {
    name: "Марія Іванова",
    email: "maria@design.com",
    position: "UI/UX Designer",
    experience: "3 роки"
  };
  return(
    <>
    <UserProfile data={developer}/>
    <UserProfile data={designer}/>
    </>
  )
}

export default App;