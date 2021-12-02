import { RefresherEventDetail } from "@ionic/core";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
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
    </IonPage>
  );
};

export default Home;
