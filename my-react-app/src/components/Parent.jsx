import React from "react";
import Child from "./Child";

function Parent() {
  let infoAboutAuthor = [
    { id: "23", name: "კაცია ადამიანი?!", author: "ილია ჭავჭავაძე" },
    { id: "24", name: "ზებულონი", author: "ლევან ქარჩხაძე" },
    { id: "25", name: "დიდოსტატის მარჯვენა", author: "• კონსტანტინე გამსახურდია" },
  ]

  return (
    <>
      <Child props={infoAboutAuthor}></Child>
    </>
  );
}

export default Parent;
