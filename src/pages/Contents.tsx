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
];

const data = [
  {
    shloka: 1,
    content: [
      {
        id: 1,
        a: "अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।",
        c: "होतारं रत्नधातमम् ॥१॥",
      },
      {
        id: 2,
        a: "अग्निः पूर्वेभिर्ऋषिभिरीड्यो नूतनैरुत ।",
        c: "स देवाँ एह वक्षति ॥२॥",
      },
      {
        id: 3,
        a: "अग्निना रयिमश्नवत्पोषमेव दिवेदिवे ।",
        c: "यशसं वीरवत्तमम् ॥३॥",
      },
      {
        id: 4,
        a: "अग्ने यं यज्ञमध्वरं विश्वतः परिभूरसि ।",
        c: "स इद्देवेषु गच्छति ॥४॥",
      },
      {
        id: 5,
        a: "अग्निर्होता कविक्रतुः सत्यश्चित्रश्रवस्तमः ।",
        c: "देवो देवेभिरा गमत् ॥५॥",
      },
      {
        id: 6,
        a: "यदङ्ग दाशुषे त्वमग्ने भद्रं करिष्यसि ।",
        c: "तवेत्तत्सत्यमङ्गिरः ॥६॥",
      },
      {
        id: 7,
        a: "उप त्वाग्ने दिवेदिवे दोषावस्तर्धिया वयम् ।",
        c: "नमो भरन्त एमसि ॥७॥",
      },
      {
        id: 8,
        a: "राजन्तमध्वराणां गोपामृतस्य दीदिविम् ।",
        c: "वर्धमानं स्वे दमे ॥८॥",
      },
      {
        id: 9,
        a: "स नः पितेव सूनवेऽग्ने सूपायनो भव ।",
        c: "सचस्वा नः स्वस्तये ॥९॥",
      },
    ],
  },
];

const Contents = () => {
  const { mandalam, suktam }: { mandalam: string; suktam: string } =
    useParams();
  const shloka = data.find((s) => s.shloka === parseInt(suktam, 10));
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

  if (!shloka) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" color="success" />
            </IonButtons>
            <IonTitle>
              {mandalam}-{suktam}
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

            <IonTitle>{data[0].shloka.toString()}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div
          style={{
            backgroundColor: "white",
          }}
        >
          <AudioPlayer
            src={`/assets/audios/${mandalam}/${mandalam}/00${audioSource}.mp3`}
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
          {data[0].content.map((item) => {
            return <Texts language={language} />;

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
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </IonContent>
    </IonPage>
  );
};

export default Contents;
