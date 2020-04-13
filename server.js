var express= require('express');
var app=express();
var bodyParser= require('body-parser');
var fs= require('fs');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('./public'));
var wd = fs.readFileSync('./public/data/inscription.json');
var list= JSON.parse(wd);
//reservation
var wd2 = fs.readFileSync('./public/data/reservation.json');
var list2= JSON.parse(wd2);
app.get('/',(req,resp)=>{
    resp.render('index');
});

app.get('/showReservation',(req,resp)=>{
            resp.render('affichage',{list2});
});
app.get('/galerie',(req,resp)=>{
    resp.render('galerie');
    });
app.get('/inscription',(req,resp)=>{
        resp.render('inscription');
});
app.get('/reservation',(req,resp)=>{
                resp.render('reservation',{list});
 });
 var index1 ;
 var index2;
 app.get('/edit/:id',(req,resp)=>{
     var {id}=req.params;
     for(var j in list){
     for(var i in list2){
     if(id==list2[i].id && id==list[j].id){
index1=i;
index2=j;
     }
    }
     }
       resp.render('modifier',{list:list[index2],list2:list2[index1]});
});
//Modifier
app.post('/Modifier',(req,resp)=>{
    var {prenom,nom,email,telephone,message,dateDebut,dateFin,voiture}=req.body;
list[index2].nom=nom;
list[index2].prenom=prenom;
list[index2].email=email;
list[index2].message=message;
// list2
list2[index1].voiture=voiture;
list2[index1].dateDebut=dateDebut;
list2[index1].dateFin=dateFin;
fs.writeFileSync('./public/data/inscription.json',JSON.stringify(list,null,3));
fs.writeFileSync('./public/data/reservation.json',JSON.stringify(list2,null,3));
      resp.redirect('/showReservation');
});

//supprimer
app.get('/delete/:id',(req,resp)=>{
    var dataVid=[];
    var {id}=req.params;
    for(var j in list2){
        if(id!== list2[j].id){
dataVid=list2[j];
        }
    }
    list2=dataVid;
    console.log('data Vid ' + JSON.stringify(list2));
    fs.writeFileSync('./public/data/reservation.json',JSON.stringify(list2,null,3));
    resp.redirect('/showReservation');
});

 app.post('/inscription',(req,resp)=>{
     var {prenom,nom,password,email,telephone,message}=req.body;
list.push({"id":list.length+1,
"prenom":prenom,
"nom":nom,
"password":password,
"email":email,
"telephone":telephone,
"message":message
 });
 fs.writeFileSync('./public/data/inscription.json',JSON.stringify(list,null,3));
 resp.redirect('/reservation');
 });

 //reservation
 app.post('/reservation',(req,resp)=>{
    var {id,dateDebut,voiture,dateFin}=req.body;
console.log(JSON.stringify(req.body));
list2.push({
"id":id,
"reservation": list2.length+1,
"voiture":voiture,
"dateDebut":dateDebut,
"dateFin":dateFin
});
fs.writeFileSync('./public/data/reservation.json',JSON.stringify(list2,null,3));
resp.redirect('/reservation');
});
app.listen(3300);