import React from "react";
import SectionTitle from "./section-title";
import { NewArrivalProducts } from "./new-arrival-products";

export const NewArrivals = () => {
  return (
    <section className="section">
      <SectionTitle title="New Arrivals" />
      <NewArrivalProducts/>
    </section>
  );
};
