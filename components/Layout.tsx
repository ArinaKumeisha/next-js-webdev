import React, {FC, ReactNode} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: ReactNode;
}
const Layout: FC<Props> = ({children}) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  );
};

export default Layout;