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
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import H5AudioPlayer from "react-h5-audio-player";
import { between, hmsToSecondsOnly } from "../utils/helpers";
const data = [
  {
    shloka: 1,
    content: [
      {
        id: 1,
        a: "अ॒ग्निमी॑ळे पु॒रोहि॑तं य॒ज्ञस्य॑ दे॒वमृ॒त्विज॑म् ।",
        c: "होता॑रं रत्न॒धात॑मम् ॥",
        startTime: "1:26",
        endTime: "1:41",
      },
      {
        id: 2,
        a: "अ॒ग्निः पूर्वे॑भि॒र्ऋषि॑भि॒रीड्यो॒ नूत॑नैरु॒त ।",
        c: "स दे॒वाँ एह व॑क्षति ॥",
        startTime: "1:42",
        endTime: "1:54",
      },
      {
        id: 3,
        a: "अ॒ग्निना॑ र॒यिम॑श्नव॒त्पोष॑मे॒व दि॒वेदि॑वे ।",
        c: "य॒शसं॑ वी॒रव॑त्तमम् ॥",
        startTime: "1:55",
        endTime: "2:05",
      },
      {
        id: 4,
        a: "अग्ने॒ यं य॒ज्ञम॑ध्व॒रं वि॒श्वतः॑ परि॒भूरसि॑ ।",
        c: "स इद्दे॒वेषु॑ गच्छति ॥",
        time: "4",
        startTime: "2:06",
        endTime: "2:15",
      },
      {
        id: 5,
        a: "अ॒ग्निर्होता॑ क॒विक्र॑तुः स॒त्यश्चि॒त्रश्र॑वस्तमः ।",
        c: "दे॒वो दे॒वेभि॒रा ग॑मत् ॥",
        startTime: "2:16",
        endTime: "0:25",
      },
      {
        id: 6,
        a: "यद॒ङ्ग दा॒शुषे॒ त्वमग्ने॑ भ॒द्रं क॑रि॒ष्यसि॑ ।",
        c: "तवेत्तत्स॒त्यम॑ङ्गिरः ॥",
        startTime: "0:25",
        endTime: "0:30",
      },
      {
        id: 7,
        a: "उप॑ त्वाग्ने दि॒वेदि॑वे॒ दोषा॑वस्तर्धि॒या व॒यम् ।",
        c: "नमो॒ भर॑न्त॒ एम॑सि ॥",
        startTime: "0:30",
        endTime: "0:35",
      },
      {
        id: 8,
        a: "राज॑न्तमध्व॒राणां॑ गो॒पामृ॒तस्य॒ दीदि॑विम् ।",
        c: "वर्ध॑मानं॒ स्वे दमे॑ ॥",
        startTime: "0:35",
        endTime: "0:40",
      },
      {
        id: 9,
        a: "स नः॑ पि॒तेव॑ सू॒नवेऽग्ने॑ सूपाय॒नो भ॑व ।",
        c: "सच॑स्वा नः स्व॒स्तये॑ ॥",
        startTime: "0:40",
        endTime: "0:45",
      },
    ],
  },
];

const Contents = () => {
  const { id }: { id: string } = useParams();
  const shloka = data.find((s) => s.shloka === parseInt(id, 10));
  const audioRef = React.useRef<H5AudioPlayer>(null);

  // change the color of text with time

  if (!shloka) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" color="success" />
            </IonButtons>
            <IonTitle>{data[0].shloka.toString()}</IonTitle>
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
          <AudioPlayer src="/assets/01.mp3" ref={audioRef} autoPlay />
        </div>
        <div
          style={{
            padding: "10px",
            alignSelf: "center",
            backgroundColor: "white",
          }}
        >
          {data[0].content.map((item) => {
            return Texts();

            function Texts() {
              const [color, setColor] = useState("black");
              useEffect(() => {
                const times = setInterval(() => {
                  if (
                    between(
                      audioRef.current?.audio.current?.currentTime,
                      hmsToSecondsOnly(item.startTime),
                      hmsToSecondsOnly(item.endTime)
                    )
                  ) {
                    setColor("red");
                  } else {
                    setColor("black");
                  }
                }, 1000);
                return () => clearInterval(times);
              }, [audioRef.current?.audio.current?.currentTime]);

              return (
                <div key={item.id}>
                  <h3 style={{ color }}>
                    <b>{item.a}</b>
                  </h3>
                  <h4 style={{ color }}>{item.c}</h4>
                  <br />
                </div>
              );
            }
          })}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Contents;
