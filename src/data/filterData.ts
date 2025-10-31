export interface FilterValue {
  id: string;
  value: string;
}

export interface FilterOption {
  id: string;
  name: string;
  values: FilterValue[];
}

export const JOB_FILTER_OPTIONS: FilterOption[] = [
  {
    id: "jobType",
    name: "Job Type",
    values: [
      { id: "fulltime", value: "Full-Time" },
      { id: "parttime", value: "Part-Time" },
      { id: "remote", value: "Remote" },
    ],
  },
  {
    id: "experience",
    name: "Experience Level",
    values: [
      { id: "junior", value: "Junior" },
      { id: "mid", value: "Mid" },
      { id: "senior", value: "Senior" },
    ],
  },
  {
    id: "country",
    name: "Country",
    values: [
      { id: "usa", value: "United States" },
      { id: "canada", value: "Canada" },
      { id: "uk", value: "United Kingdom" },
      { id: "germany", value: "Germany" },
      { id: "france", value: "France" },
      { id: "italy", value: "Italy" },
      { id: "spain", value: "Spain" },
      { id: "netherlands", value: "Netherlands" },
      { id: "sweden", value: "Sweden" },
      { id: "norway", value: "Norway" },
      { id: "finland", value: "Finland" },
      { id: "australia", value: "Australia" },
      { id: "newzealand", value: "New Zealand" },
      { id: "india", value: "India" },
      { id: "china", value: "China" },
      { id: "japan", value: "Japan" },
      { id: "southkorea", value: "South Korea" },
      { id: "brazil", value: "Brazil" },
      { id: "mexico", value: "Mexico" },
      { id: "southafrica", value: "South Africa" },
    ],
  },
];

export const INITIAL_FILTER_SELECTION: Record<string, string> = {};
