import React, { useState, useCallback } from "react";
import Button from "./Button";
import Title from "./Title";
import CountBack from "./CountBack";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    console.log("inside incrementAge");
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    console.log("inside incrementSalary");
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <CountBack text="Age" count={age} />
      <Button handlerClick={incrementAge}>incrementAge</Button>
      <CountBack text="Salary" count={salary} />
      <Button handlerClick={incrementSalary}>incrementSalary</Button>
    </div>
  );
}

export default ParentComponent;