import { MockDataType } from "./fetchMockData";

export const mockData: MockDataType[] = [
  {
    pn: 123,
    applicableAPU: 'CFM56-5B',
    base: 'DME',
    actualLocations: ['A1', 'A2', 'A3']
  },
  {
    pn: undefined,
    applicableAPU: '',
    base: 'SVO',
    actualLocations: ['B1', 'B2']
  },
  {
    pn: 236,
    applicableAPU: 'CFM56-7B',
    base: 'DME',
    actualLocations: ['C1', 'C2']
  }
];