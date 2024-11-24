const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => next(err))
    };

};


export {asyncHandler}




/* ---------- Another Way --------------->

const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
        
    } catch (error) {
       res.status(err.Code || 500).json({
        success: false,
        message: err.message
       }) 
    }
}
    */