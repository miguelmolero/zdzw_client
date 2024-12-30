import React from "react";
import Header from "./Header";
import {
    MainContent,
    RootContainer,
} from "./styles/DefaultLayout";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
            <RootContainer>
                <Header />
                <MainContent>
                    {children}
                </MainContent>
            </RootContainer>
    );
};

export default DefaultLayout;
