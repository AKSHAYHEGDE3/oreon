const mongoose = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema(
    {
        email : {
            type:String,
            required: [true, 'Please enter a email'],
            unique:[true,"email already registered"],
            lowercase: true,
            validate: [isEmail, 'Please enter a valid email address']
        },
       password : {
            type:String,
        },
        questions : {
            q1 : {
                save : {type:Boolean,default:false},
                data : {type:Object,default:null}
            },
            q2 : {
                save : {type:Boolean,default:false},
                data : {type:Object,default:null}
            },
            q3 : {
                save : {type:Boolean,default:false},
                data : {type:Object,default:null}
            },
            q4 : {
                save : {type:Boolean,default:false},
                data : {type:Object,default:null}
            },
            q5 : {
                save : {type:Boolean,default:false},
                data : {type:Object,default:null}
            },

        }
        
     
    },
    {timestamps:true}
);

module.exports = mongoose.model("User",UserSchema);