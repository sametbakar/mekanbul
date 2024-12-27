var mongoose=require('mongoose');
var dbURI="mongodb+srv://sametders32:3VSuBvOCSLX9rPnI@clustermekanbul.69pzl.mongodb.net/mekanbul?retryWrites=true&w=majority&appName=ClusterMekanbul"
//var dbURI="mongodb://localhost/mekanbul";
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log(dbURI+" adresine bağlandı");
});
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+" bağlantısı koptu");
});

process.on("SIGINT",function(){
    mongoose.connection.close();
    console.log("Bağlantı kapatıldı");
    process.exit(0);
});
require("./venue");