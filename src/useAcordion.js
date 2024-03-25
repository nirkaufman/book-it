import {useState} from "react";


export function useAccordion() {
  const [activeTabId, setActiveTabId] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTabId(tabId);
  };

  const isTabActive = (tabId) => {
    return tabId === activeTabId;
  }

  return {
    handleTabClick,
    isTabActive
  };
}
