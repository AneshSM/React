const icon = {
  materialSymbolsRounded: {
    "font-variation-settings": {
      FILL: 1,
      wght: 400,
      GRAD: 0,
      opsz: 48,
    },
  },
  span: {
    fontSize: "20px",
  },
};
const IconList = [
  {
    // KPI icons
    Balance: (
      <span style={(icon.materialSymbolsRounded, icon.span)}>wallet</span>
    ),
    Income: (
      <span style={(icon.materialSymbolsRounded, icon.span)}>payments</span>
    ),
    Expenses: (
      <span style={(icon.materialSymbolsRounded, icon.span)}>credit_card</span>
    ),
    Savings: (
      <span style={(icon.materialSymbolsRounded, icon.span)}>
        monetization_on
      </span>
    ),
  },
];

export default IconList;
