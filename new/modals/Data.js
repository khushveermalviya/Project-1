import mongoose from 'mongoose'
const Schema= mongoose.Schema
const UserSchema =new Schema ({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    order:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:   "order",
        },

    ],
    WishList:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ]   ,
    isAdmin:{
        type:'Boolean',
        default:"false",
    },
    isShippingAddress:{
        type:'Boolean',
        default:"false",
    },
    ShippingAddress:{
      firstName:{
        type:String
      },
      LastName:{
        type:String
      },
      Address:{
        type:String
      },
      City:{
        type:String
      },
      PinCode:{
        type:String
      },
      Country:{
        type:String
      },
      Phone:{
        type:String
      },
    },

    
},{
    timestamps:true,
})
const User=mongoose.model("User",UserSchema)
export default User; 