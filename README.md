# Text Reader
/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/


## By KidGoku / Tigerball890


### INTRO
<><><><><><><><><><><><><>

This node module allows you to read text files and parse them as JSON. The text files must have certain syntax, but are more easy to write then JSON files. This module allows you to do that easily.

### SYNTAX     
\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

The syntax consists of key/value pairs, but are easier to read.      

Examples: (Imaginary)     

Simple Key/Value File:   
    ``myJob, doctor``    
    ``bobsJob, lawyer``      
    ``joesJob, jeweler``    
Would parse as JSON like so:
``{    
    "myJob": "doctor",   
    "bobsJob": "lawyer",   
    "joesJob": jeweler"   
}``   
    
      
More complicated object file:    
     
``[jobs]  myJob, doctor``      
``[jobs]  bobsJob, lawyer``      
(These people are rich)     
``[salary] me, $100 per day``        
``[salary] bob, $30000 per day``         
    
Would parse as:   
``{          
    "jobs": {     
        "myJob": "doctor",       
        "bobsJob": "lawyer",       
    },          
    "salary": {      
        "me": "$100 per day",    
        "bob": "$30000 per day"    
    }     
}``

### LISTS          
\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

For a list, put the text after the comma and space like so:     
    ``myJobs, list: ~"McDonalds" and "Doctor"~    ``      
Make sure anything that is not true, false, a number, null, or undefined is in quotes in a list.
    


