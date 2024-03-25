import 'bootstrap/dist/css/bootstrap.rtl.css';
import './global.css';
import {useAccordion} from "./useAcordion.js";
import {TodoList} from "./todolist/TodoList.jsx";
import {useTodos} from "./todolist/use-todos.js";
import {TodolistErrorBoundary} from "./ErrorBoundry.jsx";
import {FiveStarRate} from "./icons/StartRate.jsx";


const tabs = [
  {
    id: 1,
    tabTitle: "title 1",
    content: "תוכן של טאב מספר 1"
  },
  {
    id: 2,
    tabTitle: "title 2",
    content: "תוכן של טאב מספר 2"
  },
  {
    id: 3,
    tabTitle: "title 3",
    content: "תוכן של טאב מספר 3"
  },
  {
    id: 4,
    tabTitle: "title 4",
    content: "תוכן של טאב מספר 4"
  }
];


function App() {
  const {handleTabClick, isTabActive} = useAccordion();


  return (
      <div className='container section'>
        <h1>האפליקציה שלי</h1>

        <FiveStarRate/>

        <TodolistErrorBoundary msg="רשימת משימות לא נטענה">
          <TodoList/>
        </TodolistErrorBoundary>



        <h1>Welcome to book-it</h1>


        <ul>
          {tabs.map((tab) => (
              <li>
                <h3>
                  <button
                      onClick={() => handleTabClick(tab.id)}>{tab.tabTitle}</button>
                </h3>
                {isTabActive(tab.id) && <p>{tab.content}</p>}
              </li>
          ))}

        </ul>

      </div>
  )
}

export default App
