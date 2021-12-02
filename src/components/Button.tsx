import { IonButton, IonContent, IonPage } from "@ionic/react";
import React from "react";

const ButtonExample: React.FC = () => (
  <IonPage>
    <IonContent>
      {/*-- Anchor --*/}
      <IonButton href="/">Anchor</IonButton>

      {/*-- Colors --*/}
      <IonButton color="primary">Primary</IonButton>
      <IonButton color="secondary">Secondary</IonButton>
      <IonButton color="tertiary">Tertiary</IonButton>
      <IonButton color="success">Success</IonButton>
      <IonButton color="warning">Warning</IonButton>
      <IonButton color="danger">Danger</IonButton>
      <IonButton color="light">Light</IonButton>
      <IonButton color="medium">Medium</IonButton>
      <IonButton color="dark">Dark</IonButton>
    </IonContent>
  </IonPage>
);

export default ButtonExample;
