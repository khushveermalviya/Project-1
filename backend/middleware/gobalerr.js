import { json } from "express";

const gobalerr=(err,req,res,next)=>{
    const stack= err?.stack;
    const messag = err?.messag;
    const statusCode =err?.statusCode ? err?.statusCode :500;
    res.status(statusCode).json({
        stack,
        messag
    });


}
export default gobalerr;