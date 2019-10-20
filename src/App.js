import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { ToastProvider } from "react-toast-notifications";
import { Button } from "rebass/styled-components";

import Nav from "./components/Nav";
import Toast from "./components/Toast";
import AppLayout from "./components/Layout/AppLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import theme from "./utils/theme";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Rubik", sans-serif;
    margin: 0;  
  }
  html {
    background-color: ${props => props.theme.background.bg};
    color: ${props => props.theme.background.color}
  }
`;

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <Router>
      <ThemeProvider theme={isDark ? theme.dark : theme.light}>
        <ToastProvider
          components={{ Toast }}
          placement="bottom-center"
          autoDismissTimeout={1500}
        >
          <GlobalStyle />
          <AppLayout>
            <Nav />

            <Button
              variant="primary"
              mt={4}
              mb={4}
              onClick={() => setIsDark(!isDark)}
            >
              Toggle Theme
            </Button>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </AppLayout>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
