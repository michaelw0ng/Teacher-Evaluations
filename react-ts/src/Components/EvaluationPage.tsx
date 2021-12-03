import * as React from "react";
import styles from "../Stylesheets/EvaluationPage.module.css";
import RadioInput from "./RadioInput";

function EvaluationPage() {
  return (
    <div className={styles.EvaluationPage}>
      <h1>Teacher Evaluations</h1>
      <div style={{ textAlign: "center" }}>
        Please fill out the following form about yourself, your experience in
        the course, and your Instructor:
        <hr />
      </div>
      <form>
        <div style={{ textAlign: "center", padding: "10px 0px" }}>
          Student Information:
          <br />
          <div
            style={{
              width: "400px",
              margin: "auto",
              display: "grid",
              gridTemplateColumns: "50% 50%",
            }}
          >
            <div>
              <div style={{ padding: "1.5px 2px" }}>First Name</div>
              <div style={{ padding: "1.5px 2px" }}>Last Name</div>
              {/* <div style={{ padding: "1.5px 2px" }}>Student Id</div> */}
              <div style={{ padding: "1.5px 2px" }}>Current GPA</div>
            </div>
            <div>
              <input
                style={{ margin: "0px 10px" }}
                type="text"
                id="firstName"
                maxLength={32}
              ></input>
              <input
                style={{ margin: "0px 10px" }}
                type="text"
                id="lastName"
                maxLength={32}
              ></input>
              {/* <input
                style={{ margin: "0px 10px" }}
                type="text"
                id="studentId"
                maxLength={64}
              ></input> */}
              <input
                style={{ margin: "0px 10px" }}
                type="text"
                id="studentGpa"
                maxLength={3}
              ></input>
            </div>
          </div>
          <br />
          Instructor Information:
          <br />
          <div
            style={{
              width: "400px",
              margin: "auto",
              display: "grid",
              gridTemplateColumns: "50% 50%",
            }}
          >
            <div>
              <div style={{ padding: "1.5px 2px" }}>First Name</div>
              <div style={{ padding: "1.5px 2px" }}>Last Name</div>
              {/* <div style={{ padding: "1.5px 2px" }}>Instructor Id</div> */}
            </div>
            <div>
              <input
                style={{ margin: "0px 10px" }}
                type="text"
                id="instrFirstName"
                maxLength={32}
              ></input>
              <input
                style={{ margin: "0px 10px" }}
                type="text"
                id="instrLastName"
                maxLength={32}
              ></input>
              {/* <input
                style={{ margin: "0px 10px" }}
                type="text"
                id="instructorId"
                maxLength={64}
              ></input> */}
            </div>
          </div>
          <br />
          Course Information:
          <br />
          <div
            style={{
              width: "400px",
              margin: "auto",
              display: "grid",
              gridTemplateColumns: "50% 50%",
            }}
          >
            <div>
              <div style={{ padding: "1.5px 2px" }}>Course Title</div>
              <div style={{ padding: "1.5px 2px" }}>Department</div>
              <div style={{ padding: "1.5px 2px" }}>Course Id</div>
            </div>
            <div>
              <input
                style={{ margin: "0px 10px" }}
                type="text"
                id="crseTitle"
                maxLength={64}
              />
              <input
                style={{ margin: "0px 10px" }}
                type="text"
                id="crseDepartment"
                maxLength={64}
              />
              <input
                style={{ margin: "0px 10px" }}
                type="text"
                id="crseId"
                maxLength={64}
              />
            </div>
            <div>
              <div style={{ padding: "1.5px 2px" }}>University Name</div>
              <div style={{ padding: "1.5px 2px" }}>Semester Taken</div>
              <div style={{ padding: "1.5px 2px" }}>Semester Year</div>
            </div>
            <div>
              <input
                style={{ margin: "0px 10px" }}
                type="text"
                id="uniName"
                maxLength={64}
              ></input>
              <div style={{ margin: "0px 15px" }}>
                <select
                  id="semTaken"
                  style={{ height: "1.6em", width: "100%" }}
                >
                  <option value=""></option>
                  <option value="fall">Fall</option>
                  <option value="winter">Winter</option>
                  <option value="spring">Spring</option>
                  <option value="summer">Summer</option>
                </select>
              </div>
              <div style={{ margin: "0px 15px" }}>
                <input
                  style={{ width: "calc(100% - 8px)" }}
                  type="number"
                  id="yearTaken"
                  min="1900"
                  max="2021"
                  step="1"
                  maxLength={4}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div style={{ textAlign: "center" }}>
          Rate your Instructor and the Course on the following qualities from a
          scale of 1 to 5:
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
            <RadioInput
              stagedSubmission={stagedSubmission}
              categoryName={"Punctuality"}
              categoryId={"punctuality"}
              categoryDesc={""}
            />
            <RadioInput
              stagedSubmission={stagedSubmission}
              categoryName={"Clear Requirements"}
              categoryId={"clearRequirements"}
              categoryDesc={""}
            />
            <RadioInput
              stagedSubmission={stagedSubmission}
              categoryName={"Organization"}
              categoryId={"courseOrganization"}
              categoryDesc={""}
            />
          </div>
          <hr />
          <div style={{ textAlign: "center", padding: "10px 0px" }}>
            <div
              style={{
                width: "400px",
                margin: "auto",
                display: "grid",
                gridTemplateColumns: "50% 50%",
              }}
            >
              <div>
                <div style={{ padding: "1.5px 2px" }}>Student Absences</div>
                <div style={{ padding: "1.5px 2px" }}>Expected Grade</div>
                <div style={{ padding: "1.5px 2px" }}>Student Motive</div>
                {/* <div style = {{padding: '1.5px 2px'}}>Overall Rating</div> */}
              </div>
              <div>
                <input
                  style={{ margin: "0px 10px" }}
                  type="text"
                  id="absences"
                  maxLength={64}
                ></input>
                <input
                  style={{ margin: "0px 10px" }}
                  type="text"
                  id="expectedGrade"
                  maxLength={64}
                ></input>
                <input
                  style={{ margin: "0px 10px" }}
                  type="text"
                  id="motive"
                  maxLength={64}
                ></input>
              </div>
            </div>
            <div className={styles.RadioInputs}>
              <RadioInput
                stagedSubmission={stagedSubmission}
                categoryName={"Overall Rating"}
                categoryId={"rating"}
                categoryDesc={""}
              />
            </div>
            Additional Comments:
            <br />
            <textarea
              style={{ width: "350px", height: "5em", resize: "none" }}
              maxLength={64}
            />
          </div>
          <br />
        </div>
      </form>

      <div onClick={onSubmit} style={{ textAlign: "center" }}>
        <button style={{ padding: "5px", borderRadius: "10px" }}>Submit</button>
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
  // console.log(stagedSubmission);
  const inputs = document.getElementsByTagName("input");
  for (let i = 0; i < 63; i++) {
    if (inputs[i].checked) {
      data[inputs[i].name] = inputs[i].value;
    }
    if (inputs[i].id != "") {
      data[inputs[i].id] = inputs[i].value;
    }
  }
  const comment = document.getElementsByTagName("textarea")[0].value;
  if (comment != "") {
    data["comment"] = comment;
  }
  const semTaken = (document.getElementById("semTaken") as HTMLInputElement)!
    .value;
  data["semTaken"] = semTaken;
  // console.log(localStorage.getItem("data"));
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
    !data.hasOwnProperty("Respect") &&
    !data.hasOwnProperty("Punctuality") &&
    !data.hasOwnProperty("Clear Requirements") &&
    !data.hasOwnProperty("Organization") &&
    !data.hasOwnProperty("Overall Rating")
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
