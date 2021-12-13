import { IonApp, IonButton, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import { Redirect, Route } from "react-router-dom";
import Contents from "./pages/Contents";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp style={{ margin: "auto" }}>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/contents/:mandalam/:aadhaya">
          <Contents />
        </Route>
        <Route exact path="/contents/:mandalam/:aadhaya/:suktam">
          <Contents />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>

    <IonButton
      style={{
        margin: "10px",
        padding: "5px",
        position: "fixed",
        bottom: "0",
        right: "0",
      }}
      href={`/search`}
    >
      Search
    </IonButton>
  </IonApp>
);

export default App;
