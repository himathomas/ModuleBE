const express= require('express');

const router= express.Router();

 const Task= require('../models/task');

 // getting all

  router.get('/', async(req,res) =>{

    try{

      const tasks = await Task.find();

       res.json(tasks);

     }catch (err)

     { res.json({message:err});

     }

   });

   router.get("/:taskid", async (req, res) => {

    try {
  
      const task = await Task.findOne({taskid:req.params.taskid})
  
      ;
  
      res.json(task);
  
    } catch (err) {
  
      res.json({ message: err });
  
    }
  
  });



 // getting

 

 router.get("/:taskid", async (req, res) => {

  try {

    const task = await Task.findById(req.params.taskid)

    ;

    res.json(task);

  } catch (err) {

    res.json({ message: err });

  }

});

// creating



router.post('/',(req,res)=>{
console.log(req.body);
    const task =new Task({

              taskname:req.body.data.taskName,

              taskid:req.body.data.taskid,

              taskdescription:req.body.data.description,

              files:req.body.data.files?req.body.data.files:"",

              leader:req.body.leader?req.body.leader:"",

              associate:req.body.data.associate?req.body.data.associate:"",

              status:req.body.data.status,

             approval:req.body.approval?req.body.approval:""



                 });
                 console.log(task);
                  task.save(). then(data =>{ res.json(data); }).catch (err=>{ res.json({message:err}); }) });
                   // deleting



 router.delete('/:taskid', async(req,res) =>{

    try{
 
       const removepost = await Task.deleteOne({taskid: req.params.taskid});
 
        res.json(removepost); }
 
        catch(err){ res.json({message:err});
 
        }
 
        } );
        //updating a custumer by id



    // router.patch("/:taskid", async (req, res) => {

    //     try {
    
    //       const task= await Task.findOne({ _id: req.params.taskid });
    
    //       console.log("user done",task)
    
       
    
    //       if (req.body.status) {
    
    //         task.status= req.body.status;
    
    //       }
    
         
    
    //       await task.save((err)=>{if(err){console.log("err",err)}});
    
    //       res.json(task);
    
    //     } catch (err) {
    
    //       res.json({ message: err });
    
    //     }



    
    
    //updating status of task

  router.patch("/:taskid", async (req, res) => {
      try {
  
        const task= await Task.findOne({ taskid: req.params.taskid });
  
        console.log("user done",task)
  
          if (req.body.status) {
  
             task.status= req.body.status;
  
          }
  
         await task.save((err)=>{if(err){console.log("err",err)}});
  
         res.json(task);
  
    } catch (err) {
  
        res.json({ message: err });
  
      }
  
    });

        //Getting TaskID
        router.get("/:taskid", async (req, res) => {

          try {
        
            const task = await Task.find({taskid:req.params.taskid})
        
            ;
        
            res.json(task);
        
          } catch (err) {
        
            res.json({ message: err });
        
          }
        
        });
    
      //});
    
     
    
    
    
     module.exports= router;