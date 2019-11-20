const mongoose = require('mongoose');
const validate = require('validator'); 

const addNewProject = mongoose.model('NewProject', {
    attn:{
        type: String, 
        require: true
    }, 
    dateofProject:{
        type: Date, 
        require: true,
    },
    brand:{
        type: String, 
        require: true
    },
    address:{
        type: String, 
        require: true
    }, 
    typeOfProduction:{
        type: String, 
        require: true
    }, 
    usage:{
        type: String, 
        require: true
    }, 
    creativeProducer:{
        type: String, 
        require: true
    }, 
    location:{
        type: String, 
        require: true
    }, 
    shootDates:{
        type: Date, 
        require: true
    }, 
    numberOfDays:{
        type: Number, 
        require: true
    }, 
    photography: {
        photographerAssignmentFees:{
            type: Number, 
            require: true
        }, 
        digitalCapture:{
            type: Number, 
            require: true
        }, 
        imageRetouching:{
            type: Number, 
            require: true
        }, 
        digitalTechTechnicalCrew:{
            type: Number, 
            require: true
        }, 
        equipmentRentals:{
            type: Number, 
            require: true
        }, 
    }, 
    talentAndCrew:{
        models:{
            type: Number, 
            require: true
        }, 
        stylistAssistant:{
            type: Number, 
            require: true
        }, 
        hairAndMakeUp:{
            type: Number, 
            require: true
        }, 
        stylingBudgets:{
            type: Number, 
            require: true
        }, 
        producer:{
            type: Number, 
            require: true
        }, 
        dressmanTailor:{
            type: Number, 
            require: true
        }, 
    }, 
    location: {   
        studioRental:{
            type: Number, 
            require: true
        }, 
    }, 
    shootingDayProduction:{
        foodAndBeverages:{
            type: Number, 
            require: true
        }, 
        productionTransportation:{
            type: Number, 
            require: true
        }, 
        productionBoys:{
            type: Number, 
            require: true
        }, 
    }
})

module.exports = addNewProject; 