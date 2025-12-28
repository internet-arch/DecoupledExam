import loginAPI from "./Server/loginAPI";
import getQuestionTypeAPI from "./Server/getQuestionTypeAPI";
import getSubjectAPI from "./Server/getSubjectAPI";
import getQuestionsAPI from "./Server/getQuestionsAPI";
import loginFaceAPI from "./Server/loginFaceAPI";
import {
    createExamAPI,
    getExamListAPI,
    getExamDetailAPI,
    getExamRecordAPI,
    updateExamAPI,
    deleteExamAPI,
    addStudentsToExamAPI,
    removeStudentsFromExamAPI,
    getExamStudentsAPI,
    exportExamDataAPI,
    publishExamToCourseAPI,
    unpublishExamFromCourseAPI,
    getExamPublishedCoursesAPI,
    getCourseExamsAPI,
    getStudentExamsAPI,
    getStudentNotificationsAPI,
    getExamNotificationsAPI,
    initExamNotificationsAPI
} from "./Server/examAPI";
import {
    getAllStudentsAPI,
    getStudentByIdAPI,
    searchStudentsAPI,
    getStudentsNotInExamAPI
} from "./Server/studentAPI";
import addQuestionsAPI from "./Server/addQuestionsAPI";
import importQuestionsAPI from "./Server/importQuestionsAPI";
import registerAPI  from "./Server/registerAPI";
import teacherRegisterAPI from "./Server/teacherRegisterAPI";
import userAPI from "./Server/userAPI";

export {
    loginAPI,
    getQuestionTypeAPI,
    getSubjectAPI,
    getQuestionsAPI,
    loginFaceAPI,
    createExamAPI,
    getExamListAPI,
    getExamDetailAPI,
    getExamRecordAPI,
    updateExamAPI,
    deleteExamAPI,
    addStudentsToExamAPI,
    removeStudentsFromExamAPI,
    getExamStudentsAPI,
    exportExamDataAPI,
    publishExamToCourseAPI,
    unpublishExamFromCourseAPI,
    getExamPublishedCoursesAPI,
    getCourseExamsAPI,
    getStudentExamsAPI,
    getStudentNotificationsAPI,
    getExamNotificationsAPI,
    initExamNotificationsAPI,
    getAllStudentsAPI,
    getStudentByIdAPI,
    searchStudentsAPI,
    getStudentsNotInExamAPI,
    addQuestionsAPI,
    importQuestionsAPI,
    registerAPI,
    teacherRegisterAPI,
    userAPI,
}