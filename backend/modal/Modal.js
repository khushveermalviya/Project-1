import mongoose  from "mongoose";
const Schema =mongoose.Schema
const UserSchema=new Schema({
        username:{
            type:String,
            required:true,

        },
        lastname:{
            type:String,
            required:true,

       },
        Email:{
            type:String,
            required:true,

        },
        Password:{
            type:String,
            required:true,

        },
        mobileNumber:{
            type:String,
            required:true,

        },
        Order:[
            {
                type:mongoose.Types.ObjectId,
                ref:"order"
            }
        ],  
        isShippingAddress:{
            type:Boolean,
            default:false
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
          }
      
        

},{
    timestamps:true
  },)
  const user=mongoose.model("user",UserSchema)

export default user;