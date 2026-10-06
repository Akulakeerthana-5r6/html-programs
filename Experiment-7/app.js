const express = require("express");
const app = express();
app.use(express.json());
let students=[
    {id:63,name:"keerthana",age:18},
    {id:4,name:"Ramya",age:19}
];
//GET - Read ALL students
app.get("/students",(req,res)=>
{
    res.json(students);
});
//post - add a student
app.post("/students",(req,res)=>
{
    students.push(req.body);
    res.send("Student added successfully");
});
//put -update a student
app.put("/students/:id",(req,res)=>
{
    let student = students.find(s=>s.id==req.params.id);
    if(student){
        student.name=req.body.name;
        student.age=req.body.age;
        res.send("Student Updated Sucessfully");
    }else{
        res.send("Student not found");
    }
});
//Delete - delete student
app.delete("/students/:id",(req,res)=>{
    students=students.filter(s=>s.id!=req.params.id);
    res.send("Student deleted successfully");
});
app.listen(3000,()=>{
    console.log("Server running on port http://localhost:3000");
});
