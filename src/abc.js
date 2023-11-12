const Doctors = [
  {
    name: "Kulkarni",
    spl: "Eye",
    fees: "500",
    adrees: { city: "Pune", loc: "Akurdi" },
  },

  {
    name: "Deshmukh",
    spl: "Gen",
    fees: "300",
    adrees: { city: "Pune", loc: "Pimpri" },
  },
  {
    name: "Kuber",
    spl: "Ent",
    fees: "700",
    adrees: { city: "Mumbai", loc: "Shivajinagar" },
  },
  {
    name: "Shaikh",
    spl: "Eye",
    fees: "400",
    adrees: { city: "Pune", loc: "Shivajinagar" },
  },
  {
    name: "Aziz",
    spl: "Gen",
    fees: "500",
    adrees: { city: "Pune", loc: "Dehurod" },
  },
  {
    name: "Astana",
    spl: "Gen",
    fees: "500",
    adrees: { city: "Pune", loc: "Dehurod" },
  },
  {
    name: "Seema",
    spl: "ENT",
    fees: "400",
    adrees: { city: "Pune", loc: "Akurdi" },
  },
];

const result = Doctors.filter((item) => item.adrees.loc === "Akurdi");
const Search = result.map(
  (item) =>
    `Dr. ${item.name} -- ( Specialist : ${item.spl})-- (Fees : ${item.fees})--`
);

console.log(Search);
