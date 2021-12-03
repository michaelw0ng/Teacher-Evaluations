const express = require("express");
const mysql = require("mysql");

const server = express();
const port = 8080;

// const { password } = require("../password.json");

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

server.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE teacherEval";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("DB created...");
  });
});

server.get("/createtable", (req, res) => {
  db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "teacherEval",
    permitLocalInfile: "teacherEval",
  });
  let sql = [];
  sql.push(
    `CREATE TABLE instr_rev_2nf (uniq_crse_id VARCHAR(64), instr_id VARCHAR(64), rat INT(1), rat_type VARCHAR(64), stdnt_id VARCHAR(64))`
  );
  sql.push(
    `CREATE TABLE stud_2nf (stdnt_id VARCHAR(64), stdnt_first_name VARCHAR(64), stdnt_last_name VARCHAR(64))`
  );
  sql.push(`create table gpa_2nf (stdnt_id VARCHAR(64), stdnt_gpa VARCHAR(3))`);
  sql.push(
    `create table instr_2nf (instr_id VARCHAR(64), instr_last_name VARCHAR(64), instr_first_name VARCHAR(64))`
  );
  sql.push(
    `create table absences_2nf (uniq_crse_id VARCHAR(64), stdnt_id VARCHAR(64), stdnt_abs VARCHAR(5))`
  );
  sql.push(
    `create table exp_grade_2nf(uniq_crse_id VARCHAR(64), stdnt_id VARCHAR(64), stdnt_expected VARCHAR(2))`
  );
  sql.push(
    `create table stud_mot_2nf(uniq_crse_id VARCHAR(64), stdnt_id VARCHAR(64), stdnt_motive VARCHAR(64))`
  );
  sql.push(
    `create table add_com_2nf(uniq_crse_id VARCHAR(64), stdnt_id VARCHAR(64), comments VARCHAR(64))`
  );
  sql.push(
    `create table crse_2nf(uniq_crse_id	VARCHAR(64), crse_department VARCHAR(64), crse_id	VARCHAR(64), edu_inst VARCHAR(64))`
  );
  sql.push(
    `create table crse_tit_2nf(uniq_crse_id	VARCHAR(64), crse_title	VARCHAR(64))`
  );
  sql.push(
    `create table crse_sem_2nf(uniq_crse_id	VARCHAR(64), yr_taken	VARCHAR(4), sem_taken	VARCHAR(20))`
  );
  console.log(sql.length);
  sql.forEach((query) => {
    db.query(query, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  });
});

server.get("/insert", (req, res) => {
  db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "teacherEval",
    permitLocalInfile: "teacherEval",
  });
  let tables = [
    "absences_2nf",
    "add_com_2nf",
    "crse_2nf",
    "crse_sem_2nf",
    "crse_tit_2nf",
    "exp_grade_2nf",
    "gpa_2nf",
    "instr_2nf",
    "instr_rev_2nf",
    "stud_2nf",
    "stud_mot_2nf",
  ];
  let sql = "";
  tables.forEach((table) => {
    sql = `load data local infile '/Users/m/Downloads/${table}.csv' into table ${table} fields terminated by ',' optionally enclosed by '"' ignore 1 lines;`;
    console.log(sql);
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  });
});

server.get("/", (req, res) => {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    console.log(data);
  });
  res.end("response");
});

server.post("/data", (req, res) => {
  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });
  req.on("end", () => {
    console.log(JSON.parse(data));
    addToDB(JSON.parse(data), res);
  });
});

addToDB = (data, res) => {
  console.log(data);
  if (data.crseTitle === "" || data.uniName === "") {
    res.end("Please enter a course title and educational institution");
    return;
  }
  db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "teacherEval",
    permitLocalInfile: "teacherEval",
  });
  let sql = `select count(*) from stud_2nf;`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    const stud_id = result[0]["count(*)"] + 1;
    sql = `insert into stud_2nf values (${stud_id}, '${data.firstName}', '${data.lastName}');`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      sql = `insert into gpa_2nf values (${stud_id}, '${data.studentGpa}')`;
      db.query(sql, (err, result) => {
        if (err) throw err;
      });
      sql = `select count(*) from crse_tit_2nf;`;
      db.query(sql, (err, result) => {
        if (err) throw err;
        const uniq_crse_id = result[0]["count(*)"] + 1;
        sql = `insert into absences_2nf values (${uniq_crse_id}, ${stud_id}, '${data.absences}')`;
        db.query(sql, (err, result) => {
          if (err) throw err;
        });
        sql = `insert into exp_grade_2nf values (${uniq_crse_id}, ${stud_id}, '${data.expectedGrade}')`;
        db.query(sql, (err, result) => {
          if (err) throw err;
        });
        sql = `insert into stud_mot_2nf values (${uniq_crse_id}, ${stud_id}, '${data.motive}')`;
        db.query(sql, (err, result) => {
          if (err) throw err;
        });
        sql = `insert into add_com_2nf values (${uniq_crse_id}, ${stud_id}, '${data.comment}')`;
        db.query(sql, (err, result) => {
          if (err) throw err;
        });
        sql = `insert into crse_sem_2nf values (${uniq_crse_id}, '${data.yearTaken}', '${data.semTaken}')`;
        db.query(sql, (err, result) => {
          if (err) throw err;
        });
        sql = `insert into crse_tit_2nf values (${uniq_crse_id}, '${data.crseTitle}');`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          sql = `select count(*) from instr_2nf;`;
          db.query(sql, (err, result) => {
            if (err) throw err;
            sql = `insert into crse_2nf values (${uniq_crse_id}, '${data.crseId}', '${data.crseDepartment}', '${data.uniName}');`;
            db.query(sql, (err, result) => {
              if (err) throw err;
            });
            const instr_id = result[0]["count(*)"] + 1;
            sql = `insert into instr_2nf values (${instr_id}, '${data.instrFirstName}', '${data.instrLastName}');`;
            db.query(sql, (err, result) => {
              if (err) throw err;
              let ratings = {};
              data?.Clarity ? (ratings["Clarity"] = data?.Clarity) : null;
              data?.Charisma ? (ratings["Charisma"] = data?.Charisma) : null;
              data?.Respect ? (ratings["Respect"] = data?.Respect) : null;
              data?.Knowledge ? (ratings["Knowledge"] = data?.Knowledge) : null;
              data?.Reachability
                ? (ratings["Reachability"] = data?.Reachability)
                : null;
              data?.Relevancy ? (ratings["Relevancy"] = data?.Relevancy) : null;
              data?.Organization
                ? (ratings["Organization"] = data?.Organization)
                : null;
              data?.Punctuality
                ? (ratings["Punctuality"] = data?.Punctuality)
                : null;
              data["Clear Requirements"]
                ? (ratings["Clear Requirements"] = data["Clear Requirements"])
                : null;
              data["Overall Rating"]
                ? (ratings["Overall Rating"] = data["Overall Rating"])
                : null;
              for (const rating in ratings) {
                sql = `insert into instr_rev_2nf values (${uniq_crse_id}, ${instr_id}, ${parseInt(
                  ratings[rating]
                )}, '${rating}', ${stud_id});`;
                db.query(sql, (err, result) => {
                  if (err) throw err;
                });
              }
              res.end("Evaluation recorded");
            });
          });
        });
      });
    });
  });
};

server.listen(port, console.log(`Server started on ${port}`));
