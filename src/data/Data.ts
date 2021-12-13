import data from "./data.json";
//@ts-ignore
import Sanscript from "@sanskrit-coders/sanscript";

export const getAllMandalam = () => {
  return data.mandalams.map((mandalam) => {
    return {
      name: mandalam.name,
      id: mandalam.id,
      aadhayaa: mandalam.aadhayaa,
    };
  });
};

export const getMandalamById = (id: number) => {
  return data.mandalams.find((mandalam) => mandalam.id === id);
};

export const getAadhayasById = (man: number, aad: number) => {
  const aadh = data.mandalams.find((mandalam) => mandalam.id === man);
  return aadh?.aadhayaa.find((a) => a.id === aad);
};

export const getallShuktaById = (man: number, aad: number, s: number) => {
  const aadh = data.mandalams.find((mandalam) => mandalam.id === man);
  const sh = aadh?.aadhayaa.find((a) => a.id === aad);
  return sh?.sukta.find((shu) => shu.id === s);
};

export const getSearchResult = (query: any) => {
  data.mandalams.map((mandalam) => {
    mandalam.aadhayaa.map((aadhayaa) => {
      aadhayaa.sukta.find((sukta) => {
        if (sukta.a.includes(query)) {
          return sukta;
        }
      });
    });
  });
};
export const searchQuerys = (query: string) => {
  const result: any = [];
  data.mandalams.map((mandalam) => {
    mandalam.aadhayaa.map((aadhayaa) => {
      aadhayaa.sukta.map((sukta) => {
        if (
          sukta.a.includes(query) ||
          sukta.c.includes(query) ||
          Sanscript.t(sukta.a, "devanagari", "hk").includes(query)
        ) {
          result.push({
            mandalam: mandalam.id,
            aadhayaa: aadhayaa.id,
            sukta: sukta,
          });
        }
      });
    });
  });
  return result;
};
