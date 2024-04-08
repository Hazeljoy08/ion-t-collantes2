import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonAvatar,
  IonTextarea,
  IonButton,
  IonIcon,
  IonFooter,
  IonText,
} from '@ionic/react';
import { camera, videocam, albums, notifications, chatbox, person } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
        <hr></hr>
      </IonHeader>
      <IonContent fullscreen>
        
        
        <img src="../src/assets/img/PROFPIC.png" alt="profile" />

       
          <IonToolbar color="danger">
            <IonText style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
              Hi! I am Hazel Joy E. Collantes.<br />This is my home page!
            </IonText>
          </IonToolbar>

      </IonContent>
    </IonPage>
  );
};

export default Home;