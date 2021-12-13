import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
//@ts-ignore
import Sanscript from "@sanskrit-coders/sanscript";
import React, { useEffect, useRef, useState } from "react";
import {
  default as AudioPlayer,
  default as H5AudioPlayer,
} from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useParams } from "react-router";
import { getAadhayasById } from "../data/Data";

const languages = [
  "malayalam",
  "kannada",
  "telugu",
  "bengali",
  "devanagari",
  "oriya",
  "tamil",
  "gurmukhi",
  "gujarati",
  "hk",
];

const Contents: React.FC = () => {
  const {
    mandalam,
    aadhaya,
    suktam,
  }: { mandalam: string; aadhaya: string; suktam: string } = useParams();

  const data = getAadhayasById(Number(aadhaya), Number(suktam));
  const audioRef = React.useRef<H5AudioPlayer>(null);
  const [audioSource, setAudioSource] = useState(1);
  const [language, setLanguage] = useState("devanagari");

  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      //@ts-ignore
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [audioSource]);

  if (!data) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" color="success" />
            </IonButtons>
            <IonTitle>
              {mandalam}-{aadhaya}-{suktam}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonText>
            <h1>Shloka not found</h1>
          </IonText>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" color="success" />
            </IonButtons>

            <IonTitle>{data.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div
          style={{
            backgroundColor: "white",
          }}
        >
          <AudioPlayer
            src={`/assets/audios/${mandalam}/${aadhaya}/00${audioSource}.mp3`}
            ref={audioRef}
            autoPlay
            onEnded={() => {
              setAudioSource(audioSource + 1);
            }}
            onClickNext={() => {
              setAudioSource(audioSource + 1);
            }}
            onClickPrevious={() => {
              setAudioSource(audioSource - 1);
            }}
          />
        </div>
        <div
          style={{
            padding: "10px",
            alignSelf: "center",
            backgroundColor: "white",
          }}
        >
          {data.sukta.map((item, index) => {
            return <Texts language={language} key={index} />;

            function Texts({ language }: { language: string }) {
              return (
                <div
                  key={item.id}
                  onClick={() => setAudioSource(item.id)}
                  style={{
                    cursor: "pointer",
                  }}
                  //@ts-ignore
                  ref={item.id === audioSource ? scrollRef : null}
                >
                  <h3
                    style={{ color: item.id === audioSource ? "red" : "black" }}
                  >
                    <b>{Sanscript.t(item.a, "devanagari", language)}</b>
                  </h3>
                  <h4
                    style={{ color: item.id === audioSource ? "red" : "black" }}
                  >
                    {Sanscript.t(item.c, "devanagari", language)}
                  </h4>
                  <br />
                </div>
              );
            }
          })}
        </div>

        <select
          name={language}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{
            margin: "10px",
            padding: "5px",
            position: "fixed",
            bottom: "0",
          }}
        >
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
      </IonContent>
    </IonPage>
  );
};

export default Contents;
