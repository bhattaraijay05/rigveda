import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { searchQuerys } from "../data/Data";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: CustomEvent) => {
    setSearchQuery(e.detail.value);
  };

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" color="success" />
            </IonButtons>
            <IonTitle>Search</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonSearchbar placeholder="Search" onIonChange={handleSearch} />

        {searchQuery &&
          searchQuerys(searchQuery).map((item: any, index: number) => {
            return (
              <div
                key={index}
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  alignSelf: "center",
                  backgroundColor: "white",
                }}
                onClick={() => {
                  window.location.href = `/contents/${item.mandalam}/${item.aadhayaa}/${item.sukta.id}`;
                }}
              >
                <h3>
                  <b>{item.sukta.a}</b>
                </h3>
                <h4>{item.sukta.c}</h4>
              </div>
            );
          })}
      </IonContent>
    </IonPage>
  );
};

export default SearchPage;
