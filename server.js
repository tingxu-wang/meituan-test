var path=require('path')
var express=require('express')

var app=express()

app.use('/dist',express.static(path.join(__dirname,'dist')))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(8787,'localhost',(err)=>{
  if(err){
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:8787')
})
