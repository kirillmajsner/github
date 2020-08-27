import React, {Fragment} from 'react';

import Toolbar from "./components/UI/Toolbar/Navigation";
import Routes from "./Routes";
import Container from "@material-ui/core/Container";

export default function App() {
    return (
        <Fragment>
            <header>
                <Toolbar/>
            </header>
            <Container>
                <Routes/>
            </Container>
        </Fragment>
    );
}

