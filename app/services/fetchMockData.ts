import { mockData } from "./mockData";

export type MockDataType =
  {
    pn?: number;
    applicableAPU?: string;
    base?: string;
    actualLocations: string[];
  };


export const fetchMockData = ():Promise<MockDataType[]> => new Promise((resolve) => {
  setTimeout(() => {
      resolve(mockData);
  }, 2000);
});