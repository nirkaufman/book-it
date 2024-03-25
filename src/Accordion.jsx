import React, {createContext, useContext, useState} from "react";

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

const AccordionHeader = ({children, id}) => {
  const {setActiveTab} = useContext(AccordionContext);

  return React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onClick: () => setActiveTab(id),
    })
  })

}


const AccordionContent = ({children, id}) => {
  const {activeTab} = useContext(AccordionContext);

  return activeTab === id ? children : null;
}


Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;


export {Accordion};
