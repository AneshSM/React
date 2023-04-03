import React from "react";
import RowContainer from "./RowContainer";
import { FaBeer } from "react-icons/fa";
import styles from "../../styles/components/CustomComponentStyles.module.css";
import { KPIcards } from "../common";
const kpi_list = [
  {
    icon: <FaBeer />,
    title: "Balance",
    content: "$41,210",
  },
  { title: "Balance", content: "$41,210" },
  { title: "Balance", content: "$41,210" },
  { title: "Balance", content: "$41,210" },
];
const KpiContainer = () => {
  return (
    <RowContainer className={styles.kpi_cards_container}>
      {kpi_list.map((icons) => {
        return <KPIcards title={icons.title} content={icons.content} />;
      })}
    </RowContainer>
  );
};

export default KpiContainer;
