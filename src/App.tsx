import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, calculatorOutline, ellipse, fingerPrintOutline, personCircleOutline, square, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ClickCounter from './pages/ClickCounter';
import Calculator from './pages/Calculator';
import Todolist from './pages/Todolist/Todolist';
import QuotesGenerator from './pages/QuotesGenerator/QuotesGenerator';
import Notes from './pages/notes/notes';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          
          <Route exact path="/ion-t-collantes2/Home/Clickcounter">
            <ClickCounter />
          </Route>

          <Route exact path="/ion-t-collantes2/Home/Calculator">
            <Calculator />
          </Route>

          <Route exact path="/ion-t-collantes2/Home/Todolist">
            <Todolist />
          </Route>

          <Route exact path="/ion-t-collantes2/Home/QuotesGenerator">
            <QuotesGenerator />
          </Route>

          <Route exact path="/ion-t-collantes2/Home/notes">
            <Notes />
          </Route>


          <Route exact path="/ion-t-collantes2/">
            <Redirect to="/ion-t-collantes2/home" />
          </Route>

          <Route exact path="/ion-t-collantes2/Home">
            <Home />
          </Route>
          
          <Route exact path="/ion-t-collantes2/Profile">
            <Profile />
          </Route>

        </IonRouterOutlet>
        <IonTabBar slot="bottom">

          <IonTabButton tab="home" href="/ion-t-collantes2/Home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>profile</IonLabel>
          </IonTabButton>
          
          {/*
          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="click_counter" href="/click_counter">
            <IonIcon aria-hidden="true" icon={fingerPrintOutline} />
            <IonLabel>Click Counter</IonLabel>
          </IonTabButton>
          <IonTabButton tab="calculator" href="/calculator">
            <IonIcon aria-hidden="true" icon={calculatorOutline} />
            <IonLabel>Calculator</IonLabel>
          </IonTabButton>
          */}

          <IonTabButton tab="" href="ion-t-collantes2/home">
            <IonIcon aria-hidden="true" />
            <IonLabel></IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/ion-t-collantes2/profile">
            <IonIcon aria-hidden="true" icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
