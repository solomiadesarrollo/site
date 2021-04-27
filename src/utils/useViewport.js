import { useContext, createContext } from "react";

const viewportContext = createContext({});

const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height };
};

export default useViewport;
