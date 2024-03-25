import {createContext, useContext, useState} from "react";

const AccordionContext = createContext();

const Accordion = ({children}) => {
  const [activeTab, setActiveTab] = useState(null);

  return (
      <div className="accordion">
        <AccordionContext.Provider value={{
          activeTab,
          setActiveTab
        }}>
          {children}
        </AccordionContext.Provider>
      </div>
  )
}


const AccordionItem = ({children, tabTitle}) => {
  const {activeTab, setActiveTab} = useContext(AccordionContext);


  return (
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button"
                  onClick={() => setActiveTab(id)}>
            {tabTitle}
          </button>
        </h2>
        { activeTab === id && (
            <div className="accordion-collapse collapse show">
              <div className="accordion-body">
                {children}
              </div>
            </div>
        )}
      </div>
  )
}


Accordion.Item = AccordionItem;


export {Accordion};
