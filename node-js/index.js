const express = require("express");
const mysql = require("mysql");

const server = express();
const port = 8080;

const { password } = require("../password.json");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "teacherEvaluations",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected");
});

server.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE teacherEvaluations";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("DB created...");
  });
});

server.get("/createtable", (req, res) => {
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
    `create table crse_tit_2nf(uniq_crse_id	VARCHAR(64), crse_tltle	VARCHAR(64))`
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

server.listen(port, console.log(`Server started on ${port}`));
