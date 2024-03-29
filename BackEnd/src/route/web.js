import express from "express"
import homeController from "../controllers/homeController"
import userController from "../controllers/userController"
import doctorControler from "../controllers/doctorController"
import patientController from "../controllers/patientController"
import specialtyController from "../controllers/specialtyController"

let router = express.Router()

let initWebRouter = (app) => {

    router.get('/api/testAPI', homeController.helloWorld)


    router.get('/', homeController.getHomePage)
    router.get('/helloworld', homeController.helloWorld)
    router.get('/crud', homeController.getCRUD) //CREATE

    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.displayGetCRUD) // READ
    router.get('/edit-crud', homeController.getEditCRUD) // EDIT

    router.post('/put-crud', homeController.putCRUD)
    router.get('/delete-crud', homeController.deleteCRUD) //DELETE

    router.post('/api/login', userController.handleLogin)
    router.get('/api/get-all-users', userController.handleGetAllUsers)

    router.post('/api/create-new-user', userController.handleCreateNewUser)
    router.put('/api/edit-user', userController.handleEditUser)
    router.delete('/api/delete-user', userController.handleDeleteUser)

    router.get('/api/allcode', userController.getAllCode)

    router.get('/api/top-doctor-home', doctorControler.getTopDoctorHome)
    router.get('/api/get-all-doctors', doctorControler.getAllDoctors)

    router.post('/api/save-infor-doctor', doctorControler.postInforDoctor)

    router.get('/api/get-detail-doctor-by-id', doctorControler.getDetailDoctorById)
    router.post('/api/bulk-create-schedule', doctorControler.bulkCreateSchedule)

    router.get('/api/get-schedule-doctor-by-date', doctorControler.getScheduleByDate)

    router.get('/api/get-extra-infor-doctor-by-id', doctorControler.getExtraInforDoctorById)
    router.get('/api/get-profile-doctor-by-id', doctorControler.getProfileDoctorById)

    router.post('/api/patient-book-appointment', patientController.postBookAppointment)
    router.post('/api/verify-book-appointment', patientController.postVerifyBookAppointment)


    router.post('/api/create-new-specialty', specialtyController.createNewSpecialty)




    return app.use('/', router)
}

module.exports = initWebRouter