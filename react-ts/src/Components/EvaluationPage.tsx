import * as React from "react";
import styles from "../Stylesheets/EvaluationPage.module.css";
import RadioInput from "./RadioInput";

function EvaluationPage() {
  return (
    <div className={styles.EvaluationPage}>
      <h1>Teacher Evaluations</h1>
      <div style={{ textAlign: "center" }}>
        On a scale of 1 to 5, rate the following prompts based on...
        <br />
        ...your Instructor:
        <br />
      </div>
      <form>
        <div className={styles.columns} style={{ padding: "51px 0" }}>
          First Name:
          <br />
          <input type="text" id="firstName"></input>
          <br />
          <br />
          Last Name:
          <br />
          <input type="text" id="lastName"></input>
          <br />
          <br />
          Year Taken:
          <br />
          <input type="text" id="yearTaken"></input>
          <br />
          <br />
          Semester Taken:
          <br />
          <input type="text" id="semTaken"></input>
          <br />
          <br />
          Instructor First Name:
          <br />
          <input type="text" id="instrFirstName"></input>
          <br />
          <br />
          Instructor Last Name:
          <br />
          <input type="text" id="instrLastName"></input>
          <br />
          <br />
          Course Title:
          <br />
          <input type="text" id="crseTitle"></input>
          <br />
          <br />
          University Name:
          <br />
          <input type="text" id="uniName"></input>
          <br />
          <br />
        </div>
        <div className={styles.columns}>
          <div className={styles.RadioInputs}>
            <RadioInput
              stagedSubmission={stagedSubmission}
              categoryName={"Clarity"}
              categoryId={"instr_clarity"}
              categoryDesc={""}
            />
            <RadioInput
              stagedSubmission={stagedSubmission}
              categoryName={"Charisma"}
              categoryId={"instr_charisma"}
              categoryDesc={""}
            />
            <RadioInput
              stagedSubmission={stagedSubmission}
              categoryName={"Respect"}
              categoryId={"instr_respect"}
              categoryDesc={""}
            />
            <RadioInput
              stagedSubmission={stagedSubmission}
              categoryName={"Knowledge"}
              categoryId={"instr_knowledge"}
              categoryDesc={""}
            />
            <RadioInput
              stagedSubmission={stagedSubmission}
              categoryName={"Reachability"}
              categoryId={"instr_reachability"}
              categoryDesc={""}
            />
            <RadioInput
              stagedSubmission={stagedSubmission}
              categoryName={"Relevancy"}
              categoryId={"relevancy"}
              categoryDesc={""}
            />
          </div>
        </div>
      </form>
      <div onClick={onSubmit}>
        <button>Submit</button>
      </div>
    </div>
  );
}

declare global {
  interface Obj {
    [key: string]: any;
  }
}

const data: Obj = {};

const stagedSubmission = {
  sem_taken: "", //varchar(64)
  instr_id: "", //varchar(64)
  instr_name: "", //varchar(64)
  crse_title: "", //varchar(64)
  crse_department: "", //varchar(64)
  crse_id: "", //varchar(64)
  edu_inst: "", //varchar(64)
  clr_requirements: "", //varchar(64)
  instr_clarity: "", //int(1)
  instr_charisma: "", //int(1)
  instr_respect: "", //int(1)
  instr_knowledge: "", //int(1)
  instr_reachability: "", //int(1)
  clr_instructions: "", //int(1)    //REDUNDANT - instr_clarity
  relevancy: "", //int(1)
  stdnt_id: "", //varchar(64)
  stdnt_name: "", //varchar(64)
  stdnt_gpa: "", //varchar(3)
  stdnt_attendance: "", //varchar(64)
  stdnt_expected: "", //varchar(2)
  stdnt_motive: "", //varchar(64)
  rating: "", //int(1)
  comments: "", //varchar(64)
};

function onSubmit() {
  console.log(stagedSubmission);
  const inputs = document.getElementsByTagName("input");
  for (let i = 0; i < 38; i++) {
    if (i < 8) {
      data[inputs[i].id] = inputs[i].value;
    } else {
      if (inputs[i].checked) {
        data[inputs[i].name] = inputs[i].value;
      }
    }
  }
  console.log(localStorage.getItem("data"));
  if (data.crseTitle === "" || data.uniName === "") {
    alert("Please enter course title and university name");
    return;
  }
  if (
    !data.hasOwnProperty("Clarity") &&
    !data.hasOwnProperty("Charisma") &&
    !data.hasOwnProperty("Relevancy") &&
    !data.hasOwnProperty("Reachability") &&
    !data.hasOwnProperty("Knowledge") &&
    !data.hasOwnProperty("Respect")
  ) {
    alert("Please rate");
  }
  if (localStorage.getItem("data") === JSON.stringify(data)) {
    alert("Duplicate data");
    return;
  }
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
  let dataJSON = JSON.stringify(data);

  const req = new XMLHttpRequest();
  req.addEventListener("load", () => {
    alert(req.responseText);
  });
  req.open("POST", "http://localhost:8080/data");
  req.send(dataJSON);
}

export default EvaluationPage;
