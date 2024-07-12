import { createContext, useContext, useState } from "react";

export const GuideContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGuideContext = () => {
    return useContext(GuideContext);
};

export const GuideContextProvider = ({ children }) => {
    const [category, setCategory] = useState('luxury');
    const [selectedGuide, setSelectedGuide] = useState(JSON.parse(localStorage.getItem("stayclues-guide")) || null)
    const [icategory, seticategory] = useState(null);

    return <GuideContext.Provider value={{ icategory, seticategory, category, setCategory, selectedGuide, setSelectedGuide }}>{children}</GuideContext.Provider>;
};
