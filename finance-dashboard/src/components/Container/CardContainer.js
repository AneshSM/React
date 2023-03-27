import IconList from "../../assets/IconList";
import "../../styles/ComponentStyles/containerStyles/CardContainer.css";
import KPIcards from "../common/KPIcards";
const CardContainer = () => {
  const KPI = [
    { icon: IconList[0].Balance, title: "Balance", content: "$41,210" },
    { icon: IconList[0].Income, title: "Income", content: "$41,210" },
    { icon: IconList[0].Expenses, title: "Expenses", content: "$41,210" },
    { icon: IconList[0].Savings, title: "Savings", content: "$41,210" },
  ];

  return (
    <div className="card_container">
      <KPIcards
        title={KPI[0].title}
        icon={KPI[0].icon}
        content={KPI[0].content}
      />
      <KPIcards
        title={KPI[1].title}
        icon={KPI[1].icon}
        content={KPI[1].content}
      />
      <KPIcards
        title={KPI[2].title}
        icon={KPI[2].icon}
        content={KPI[2].content}
      />
      <KPIcards
        title={KPI[3].title}
        icon={KPI[3].icon}
        content={KPI[3].content}
      />
    </div>
  );
};

export default CardContainer;
