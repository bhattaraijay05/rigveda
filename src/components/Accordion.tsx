import React from "react";
import mobiscroll, { Button } from "@mobiscroll/react-lite";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";
import { IonButton } from "@ionic/react";

type Chapter = {
  id: number;
  number: number;
};

const data: Chapter[] = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  number: 19,
}));

const Accordion: React.FC = () => {
  return (
    <mobiscroll.Form>
      <mobiscroll.Accordion>
        {data.map((item: Chapter) => (
          <mobiscroll.FormGroup
            collapsible
            open={item.id === 0 ? true : false}
            key={item.id}
          >
            <mobiscroll.FormGroupTitle>{item.id + 1}</mobiscroll.FormGroupTitle>
            <mobiscroll.FormGroupContent>
              <div className="mbsc-padding">
                {Array.from(Array(item.number).keys()).map((data: number) => (
                  <IonButton
                    color="success"
                    href={`/contents/${item.id + 1}/${data + 1}`}
                    key={data}
                  >
                    {data + 1}
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
