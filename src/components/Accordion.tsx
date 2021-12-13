import React from "react";
import mobiscroll, { Button } from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { IonButton } from "@ionic/react";
import { getAllMandalam } from "../data/Data";

const Accordion: React.FC = () => {
  return (
    <mobiscroll.Form>
      <mobiscroll.Accordion>
        {getAllMandalam().map((mandalam) => (
          <mobiscroll.FormGroup
            collapsible
            open={mandalam.name == "Mandalam 1" ? true : false}
            key={mandalam.name}
          >
            <mobiscroll.FormGroupTitle>
              {mandalam.name}
            </mobiscroll.FormGroupTitle>
            <mobiscroll.FormGroupContent>
              <div className="mbsc-padding">
                {mandalam.aadhayaa.map((aadhayaa) => (
                  <IonButton
                    color="success"
                    href={`/contents/${mandalam.id}/${aadhayaa.id}`}
                    key={aadhayaa.id}
                  >
                    {aadhayaa.name}
                  </IonButton>
                ))}
              </div>
            </mobiscroll.FormGroupContent>
          </mobiscroll.FormGroup>
        ))}
      </mobiscroll.Accordion>
    </mobiscroll.Form>
  );
};

export default Accordion;
