const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());


app.listen(3000, () => {
    console.log('server is running..!');
})

//DataBase Connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'SSR2002#cc99',
    database:'crud',
    pool:3306
})

//check database connection
db.connect(err=>{
    if(err) {console.log(err,'dberr');}
    console.log('DB Connected..!')
})


//get all data
app.get('/getusers',(req,res)=>{
   // console.log('get users');
   let qr=`SELECT * FROM USER`;
   db.query(qr,(err,result)=>{
    if(err)
    {
        console.log(err,'Error');
    }
    if(result.length>0){
        res.send({
            message:'all users data..!',
            data:result
        })
    }
   })
});

//get single data
app.get('/get_single_user/:id',(req,res)=>{
   // console.log('Getting single data..!');
   let gID = req.params.id;
   let qr=`select * from user where id = ${gID}`;
   db.query(qr,(err,result)=>{
    if(err)
    {
        console.log(err);
    }
    if(result.length>0){
        res.send({
            message:'Getting single data..!',
            data:result
        });
    }
    else{
        res.send({
            message:'Data not found..!'
        });
    }
   });
});

//Post Data
app.post('/postuser',(req,res)=>{
   // console.log('Posting Data..!')
   console.log(req.body,'Data Posted..!');
   let ID = req.body.id;
   let fullName = req.body.fullname;
   let eMail = req.body.email;
   let mb = req.body.mobile;

   let qr=`INSERT INTO USER (id, fullname, email, mobile) values ('${ID}', '${fullName}', '${eMail}', '${mb}')`;

   db.query(qr,(err,result)=>{
    if(err){
        console.log(err);
    }
     console.log(result,'result')
     res.send({
        message:'Data Inserted..!'
     })

   })
})


//Put Data
app.put('/putuser/:id',(req,res)=>{
    // console.log('Posting Data..!')
    console.log(req.body,'Data Updated..!');
    let ID = req.params.id;
    let fullName = req.body.fullname;
    let eMail = req.body.email;
    let mb = req.body.mobile;

    let qr=`update user set fullname = '${fullName}', email = '${eMail}', mobile = '${mb}' where id = '${ID}' `;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send({
            message:'Data Updated..!'
        })
    })
 })

//Delete single Data
app.delete('/deleteuser/:id',(req,res)=>{
    let qID = req.params.id;

    let qr = `DELETE FROM USER WHERE id='${qID}' `;
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send(
            {
                message:'Data Deleted..!'
            }
        )
    });
});