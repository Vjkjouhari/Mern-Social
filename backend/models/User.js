const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true, "Enter Your name"],
    },
    avatar:{
        public_id:String,
        url:String
    },
    email:{
        type:String,
        required:[true, "Enter Your Email"],
        unique:[true, "Email already exist"]
    },
    password:{
        type:String,
        required:[true, "Please Enter your Password"],
        minlength:[8, "Password must be 8 character long"],
        select:false
    },
    mobile_no:{
        type:String,
        required:[true, "Please Enter your Mobile Number"],
        minlength:[10, "Mobile Number must be 10 character long"],
        maxlength:[10, "Mobile Number must be 10 character long"],
    },
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",
        }
    ],
    followers:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    following:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
})

exports.module = mongoose.model("User", userSchema);