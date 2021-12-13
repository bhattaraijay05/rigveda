import { IonButton } from "@ionic/react";
import mobiscroll from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import React from "react";
import { getAllMandalam } from "../data/Data";

const Accordion: React.FC = () => {
  return (
    <mobiscroll.Form>
      <mobiscroll.Accordion>
        {getAllMandalam().map((mandalam, index) => (
          <mobiscroll.FormGroup
            collapsible
            open={mandalam.name == "Mandalam 1" ? true : false}
            key={index}
          >
            <mobiscroll.FormGroupTitle>
              {mandalam.name}
            </mobiscroll.FormGroupTitle>
            <mobiscroll.FormGroupContent>
              <div className="mbsc-padding">
                <mobiscroll.Accordion>
                  {mandalam.aadhayaa.map((aadhayaa, index) => (
                    <mobiscroll.FormGroup collapsible open={true} key={index}>
                      <mobiscroll.FormGroupTitle>
                        {aadhayaa.name}
                      </mobiscroll.FormGroupTitle>
                      <mobiscroll.FormGroupContent>
                        <div className="mbsc-padding">
                          {aadhayaa.sukta.map((sukta, index) => (
                            <IonButton
                              color="success"
                              href={`/contents/${mandalam.id}/${aadhayaa.id}/${sukta.id}`}
                              key={index}
                            >
                              {sukta.id}
                            </IonButton>
                          ))}
                        </div>
                      </mobiscroll.FormGroupContent>
                    </mobiscroll.FormGroup>
                  ))}
                </mobiscroll.Accordion>
              </div>
            </mobiscroll.FormGroupContent>
          </mobiscroll.FormGroup>
        ))}
      </mobiscroll.Accordion>
    </mobiscroll.Form>
  );
};

export default Accordion;
