class AppError extends Error {
    constructor(
        statusCode,
        message ,
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode;
        this.error = error;
        this.stack = stack || new Error().stack;
        this.data = null;
        this.success = false;
    
    if(stack){
        this.stack = stack;
    }
    else {
        Error.captureStackTrace(this, this.constructor);
        this.stack = this.stack || new Error().stack;
    }
}
}

export { AppError }