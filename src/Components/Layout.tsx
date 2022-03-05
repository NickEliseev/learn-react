import { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Box, chakra } from "@chakra-ui/react";


export const Layout = ({ children }: PropsWithChildren<{}>) => {
    return (
        <>
            <Header />
            <Box marginY="100px">{children}</Box>
            <Footer />
        </>
    );
};
