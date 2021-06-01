export const setTeamName = (name) => {
    return{
        type: 'SET_TEAM_NAME',
        payload: name
    }
}
export const setTeamCity = (city) => {
    return{
        type: 'SET_TEAM_CITY',
        payload: city
    }
}
export const setTeamUsername = (username) => {
    return{
        type: 'SET_TEAM_USERNAME',
        payload: username
    }
}
export const setTeamValidation = (validation) => {
    return{
        type: 'SET_TEAM_VALIDATION',
        payload: validation
    }
}
export const clearAllTeam = () => {
    return{
        type: 'CLEAR_ALL_TEAM',
    }
}

export const setTeamEmployers = (teamEmployers=[]) => {
    return{
        type: 'SET_TEAM_EMPLOYERS',
        payload: teamEmployers
    }
}

export const setTeamEmployerUsername = (username) => {
    return{
        type: 'SET_TEAM_EMPLOYER_USERNAME',
        payload: username
    }
}

export const setTeamEmployerValidation = (validation) => {
    return{
        type: 'SET_TEAM_EMPLOYER_USERNAME',
        payload: validation
    }
}