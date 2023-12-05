import { useRouter } from 'next/dist/client/router';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

interface Props {
  children: ReactNode;
}

interface InitialData {
  width: number;
  isSanou: boolean;
  isUnou: boolean;
  target: string;
  setContextDate: Dispatch<
    SetStateAction<{
      width: number;
      isSanou: boolean;
      isUnou: boolean;
      target: string;
    }>
  >;
}

export const ContextData = createContext<InitialData>(
  {} as InitialData,
);

const BaseProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ctxData, setContextDate] = useState({
    width: windowWidth,
    isSanou: false,
    isUnou: false,
    target: '',
  });

  useEffect(() => {
    const onResize = () => {
      setContextDate((prevState) => ({
        ...prevState,
        width: window.innerWidth,
      }));
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [router.pathname]);

  useEffect(() => {
    setContextDate((prevState) => ({
      ...prevState,
      isUnou: router.pathname.indexOf('unou') !== -1,
      isSanou: router.pathname.indexOf('sanou') !== -1,
    }));
    setWindowWidth(window.innerWidth);
  }, [router.pathname]);

  return (
    <ContextData.Provider value={{ ...ctxData, setContextDate }}>
      {children}
    </ContextData.Provider>
  );
};

export default BaseProvider;
