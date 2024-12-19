// import Tx from ethereumjs-tx
// import Web3 from web3
// import Accounts from web3-eth-accounts
var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
var Accounts = require('web3-eth-accounts');
const express = require("express");
const bodyParser = require("body-parser");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const web3 = new Web3('HTTP://127.0.0.1:7545');
var accounts = new Accounts('HTTP://127.0.0.1:7545');

const abi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "instituteAddress",
          "type": "address"
        }
      ],
      "name": "isInstituteExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "instad",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_acr",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_link",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "_course",
          "type": "string[]"
        }
      ],
      "name": "addInstitute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "instad",
          "type": "address"
        }
      ],
      "name": "viewInstitute",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "acr",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "link",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "course",
              "type": "string[]"
            },
            {
              "internalType": "bool",
              "name": "del",
              "type": "bool"
            }
          ],
          "internalType": "struct cert.institute",
          "name": "i",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "instad",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_acr",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_link",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "_course",
          "type": "string[]"
        }
      ],
      "name": "updateInstitute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "instad",
          "type": "address"
        }
      ],
      "name": "deleteInstitute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "viewAllInstitutes",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "acr",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "link",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "course",
              "type": "string[]"
            },
            {
              "internalType": "bool",
              "name": "del",
              "type": "bool"
            }
          ],
          "internalType": "struct cert.institute[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "instad",
          "type": "address"
        }
      ],
      "name": "getInstituteName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "studad",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addStudent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "certad",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "instad",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "studad",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "f_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "l_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_course",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "dur",
          "type": "int256"
        }
      ],
      "name": "issueCertificate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "certad",
          "type": "address"
        }
      ],
      "name": "revCertificate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "certad",
          "type": "address"
        }
      ],
      "name": "viewCertificate",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "fname",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "lname",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "stud",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "inst",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "instName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "course",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "duration",
              "type": "int256"
            },
            {
              "internalType": "bool",
              "name": "del",
              "type": "bool"
            }
          ],
          "internalType": "struct cert.certificate",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "studad",
          "type": "address"
        }
      ],
      "name": "getStudentName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "studad",
          "type": "address"
        }
      ],
      "name": "viewStudCert",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "fname",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "lname",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "stud",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "inst",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "instName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "course",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "duration",
              "type": "int256"
            },
            {
              "internalType": "bool",
              "name": "del",
              "type": "bool"
            }
          ],
          "internalType": "struct cert.certificate[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ]

  const coa =  '0x304FD3551dEbA5BBCBaBB597d0dd39a9e30BEBf7';


  var contract = new web3.eth.Contract(abi,coa);


  //console.log(contract.methods);

let adminad = "0";
let institutead = "0";


app.get("/",function(req,res){
    res.render("home");
});

app.get("/viewcertificate/:add",function(req,res){
  contract.methods.viewCertificate(req.params.add).call(function(err,resu){
    if(err)
      console.log(err);
    console.log(resu);
    res.render("viewcertificate",{fname:resu['fname'], lname: resu['lname'],course : resu['course'],duration : resu['duration'],institute : resu['instName']});
  });
});

app.post("/",function(req,res){
  var add = req.body.addr;
  res.redirect("/viewcertificate/" + add);
})

app.get("/adminlogin",function(req,res){
    res.render("adminlogin");
});

app.get("/admin/:id",function(req,res){
  var id = req.params.id;
  web3.eth.getAccounts().then(function(result) {
    if(id == result[0])
    {
      adminad = id;
      return res.render("admin",{id: id});
    }
    res.redirect("/");
  });
  
});

app.post("/adminlogin",function(req,res){
  return res.redirect("/admin/" + req.body.address);
});

app.get("/addinstitute",function(req,res){
  res.render("addinstitute",{account: null});
});

app.post("/addinstitute",function(req,res){
  // console.log(req.body);
  //var courses = ["AI","BCC"];
  var courses = req.body.courses.split(',').map(course => course.trim());

  web3.eth.personal.newAccount('test') 
  // console.log("admin : ");
  // console.log(adminad);
  web3.eth.getAccounts().then(function(result) {
    var hash = result[result.length-1];
    console.log(hash);
    contract.methods.addInstitute(hash,req.body.name,req.body.acr,req.body.webl,courses)
    .send({from : result[0],gasPrice : 1000000000, gas : 6721975},function(err){
      if(err)
        console.log(err);
    });
    res.render("addinstitute",{account:hash});
  });
});

app.get("/viewinstitute",function(req,res){
  contract.methods.viewAllInstitutes().call(function(err,resu){
    if(err)
      console.log(err);
    console.log(resu);
    res.render("viewinstitute",{inst:resu});
  });
});

app.get("/removeinstitute",function(req,res){
  res.render("removeinstitute");
});

app.post("/removeinstitute",function(req,res){
  var id = req.body.username;
  web3.eth.getAccounts().then(function(result) {
  contract.methods.deleteInstitute(id)
  .send({from : result[0],gasPrice : 1000000000, gas : 6721975},function(err){
    if(err)
      console.log(err);
    res.redirect("/admin/" + adminad);
  });
  });
});


app.get("/institutelogin",function(req,res){
  res.render("institutelogin", { error: null });
});

app.get("/institute/:id",function(req,res){
  var id = req.params.id;
  institutead = id;

  // Call the function to check if the institute exists in the blockchain
  contract.methods.isInstituteExists(id).call()
    .then(function(exists) {
      if (exists) {
        // If the institute exists, render the institute page
        res.render("institute", { id: id });
      } else {
        // If the institute does not exist, render the institute login page with error message
        res.render("institutelogin", { error: "Institute not found." });
      }
    })
    .catch(function(err) {
      // Handle errors if any occur during the contract method call
      console.error("Error checking institute existence:", err);
      
      // Render an error page or redirect to an error page
      res.status(500).send("Internal Server Error");
    });
}); 

app.post("/institutelogin",function(req,res){
  return res.redirect("/institute/" + req.body.username);
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});

app.get("/updateinstitute",function(req,res){
  res.render("updateinstitute");
})

app.post("/updateinstitute",function(req,res){
  console.log(req.body);
  var courses = ["AI","BCC"];
  contract.methods.updateInstitute(institutead,req.body.name,req.body.acr,req.body.webl,courses)
  .send({from : institutead,gasPrice : 1, gas : 6721975},function(err){
    if(err)
      console.log(err);
  });
  res.render("institute",{id: institutead});
});

app.get("/addstudent",function(req,res){
  res.render("addstudent",{account : "NULL"});
});

app.post("/addstudent",function(req,res){
  var name = req.body.name;

  web3.eth.personal.newAccount('test') 
  web3.eth.getAccounts().then(function(result) {
    var hash = result[result.length-1];
    console.log(hash);
    contract.methods.addStudent(hash,name)
    .send({from : result[0],gasPrice : 1000000000, gas : 6721975},function(err){
      if(err)
        console.log(err);
    });
    res.render("addstudent",{account:hash});
  });
})

app.get("/gencertificate",function(req,res){
  res.render("gencertificate",{account:"NULL"});
})

app.post("/gencertificate",function(req,res){

  web3.eth.personal.newAccount('test') 
  web3.eth.getAccounts().then(function(result) {
    var hash = result[result.length-1];
    console.log(institutead);
    contract.methods.issueCertificate(hash,institutead,req.body.studad, req.body.fname, req.body.lname, req.body.course,req.body.dur)
    .send({from : result[0],gasPrice : 1000000000, gas : 6721975},function(err){
      if(err)
        console.log(err);
    });
    res.render("gencertificate",{account:hash});
  });  
});

app.get("/remcertificate",function(req,res){
  res.render("remcertificate");
});

app.post("/remcertificate",function(req,res){
  var add = req.body.addr;
  
  contract.methods.revCertificate(add).call(function(err,resu){
    if(err)
      console.log(err);
    return res.redirect("/institutelogin/");
  });
});


app.get("/studentlogin",function(req,res){
  res.render("studentlogin");
});

app.get("/student/:id", function(req, res) {
    var id = req.params.id;

    // Call to retrieve student's name
    contract.methods.getStudentName(id).call(function(err, name) {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal Server Error");
        }

        // Call to retrieve student's certificate
        contract.methods.viewStudCert(id).call(function(certErr, resu) {
            if (certErr) {
                console.error(certErr);
                return res.status(500).send("Internal Server Error");
            }
            
            var certCount = resu.length;
            
            console.log(resu[0].fname);

            // Render the "student" view with both name and certificate
            return res.render("student", { id: id, name: name, certi: resu, certCount: certCount });
        });
    });
});




app.post("/studentlogin",function(req,res){
return res.redirect("/student/" + req.body.address);
});


app.get("/test",function(req,res){
  res.render("student");
})
