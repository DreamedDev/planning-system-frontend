import {combineReducers} from "redux";

const addTeamReducer = (state = {name: '', city: '', username: '', validation: false}, action) => {
    switch (action.type){
        case 'SET_TEAM_NAME':
            return {name: action.payload, city: state.city, username: state.username, validation: state.validation}
        case 'SET_TEAM_CITY':
            return {name: state.name, city: action.payload, username: state.username, validation: state.validation}
        case 'SET_TEAM_USERNAME':
            return {name: state.name, city: state.city, username: action.payload, validation: state.validation}
        case 'SET_TEAM_VALIDATION':
            return {name: state.name, city: state.city, username: state.username, validation: action.payload}
        case 'CLEAR_ALL_TEAM':
            return {name: '', city: '', username: '', validation: state.validation}
        default:
            return state
    }
}

const addEmployerReducer = (state = {
    username: '', password: '', passwordRepeat: '',
    name: '', lastName: '', age: '', pessel: '',
    street: '', city: '', cityCode: '', phone: '',
    companyName: '', role: '', adminKey: '', position: '', salary: ''
}, action) => {
    switch (action.type){
        case 'SET_EMPLOYER_USERNAME':
            return {
                username: action.payload, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_PASSWORD':
            return {
                username: state.username, password: action.payload, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_PASSWORD_REPEAT':
            return {
                username: state.username, password: state.password, passwordRepeat: action.payload,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_NAME':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: action.payload, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_LAST_NAME':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: action.payload, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_AGE':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: action.payload, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_PESSEL':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: action.payload,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_STREET':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: action.payload, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_CITY':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: action.payload, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_CITY_CODE':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: action.payload, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_PHONE':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: action.payload,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_COMPANY_NAME':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: action.payload, role: state.role, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_ROLE':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: action.payload, adminKey: state.adminKey, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_ADMIN_KEY':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: action.payload, position: state.position, salary: state.salary
            }
        case 'SET_EMPLOYER_POSITION':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: action.payload, salary: state.salary
            }
        case 'SET_EMPLOYER_SALARY':
            return {
                username: state.username, password: state.password, passwordRepeat: state.passwordRepeat,
                name: state.name, lastName: state.lastName, age: state.age, pessel: state.pessel,
                street: state.street, city: state.city, cityCode: state.cityCode, phone: state.phone,
                companyName: state.companyName, role: state.role, adminKey: state.adminKey, position: state.position, salary: action.payload
            }
        case 'CLEAR_ALL_EMPLOYER':
            return {
                username: '', password: '', passwordRepeat: '',
                name: '', lastName: '', age: '', pessel: '',
                street: '', city: '', cityCode: '', phone: '',
                companyName: '', role: '', adminKey: '', position: '', salary: ''
            }
        default:
            return state
    }
}

const teamEmployersReducer = (state=[], action) => {
    switch (action.type){
        case 'SET_TEAM_EMPLOYERS':
            return action.payload
        default:
            return state
    }
}

const addTeamEmployerReducer = (state={username: '', validation: false}, action) => {
    switch (action.type){
        case 'SET_TEAM_EMPLOYER_USERNAME':
            return {username: action.payload, validation: state.validation}
        case 'SET_TEAM_EMPLOYER_VALIDATION':
            return {username: state.username, validation: action.payload}
        default:
            return state
    }
}

const reducers = combineReducers({
    addTeam: addTeamReducer,
    addEmployer: addEmployerReducer,
    teamEmployers: teamEmployersReducer,
    addTeamEmployer: addTeamEmployerReducer
})

export default reducers