module.exports = (requiredFields) => {
    return (req, res, next) => {

     
        const missingFields = requiredFields.filter(field => !req.body[field]);

        if (missingFields.length > 0) {
            return res.json({status:false, data: `Missing required fields: ${missingFields.join(', ')}` });
        }
     

        next();
    };
};