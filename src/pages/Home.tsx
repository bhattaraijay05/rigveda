import { RefresherEventDetail } from "@ionic/core";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import Accordion from "../components/Accordion";
import "./Home.css";

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log("Begin async operation");

  setTimeout(() => {
    console.log("Async operation has ended");
    event.detail.complete();
  }, 2000);
}
const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Accordion />
      </IonContent>

      <IonButton
        style={{
          margin: "10px",
          padding: "5px",
          position: "fixed",
          bottom: "0",
        }}
        href={`/search`}
      >
        Search
      </IonButton>
    </IonPage>
  );
};

export default Home;
