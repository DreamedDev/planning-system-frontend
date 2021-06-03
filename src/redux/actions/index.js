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
        type: 'SET_TEAM_EMPLOYER_VALIDATION',
        payload: validation
    }
}

export const setTeamEmployerTeamId = (id) => {
    return{
        type: 'SET_TEAM_EMPLOYER_TEAM_ID',
        payload: id
    }
}

export const setTeamEmployerId = (id) => {
    return{
        type: 'SET_TEAM_EMPLOYER_ID',
        payload: id
    }
}

export const setTeamEmployerNr = (nr) => {
    return{
        type: 'SET_TEAM_EMPLOYER_NR',
        payload: nr
    }
}

export const setToolCategory = (category) => {
    return{
        type: 'SET_TOOL_CATEGORY',
        payload: category
    }
}

export const setToolName = (name) => {
    return{
        type: 'SET_TOOL_NAME',
        payload: name
    }
}

export const setToolModel = (model) => {
    return{
        type: 'SET_TOOL_MODEL',
        payload: model
    }
}

export const setToolIdentityNo = (identityNo) => {
    return{
        type: 'SET_TOOL_IDENTITY_NO',
        payload: identityNo
    }
}

export const setToolValidation = (validation) => {
    return{
        type: 'SET_TOOL_VALIDATION',
        payload: validation
    }
}

export const clearAllTool = () => {
    return{
        type: 'CLEAR_ALL_TOOL'
    }
}

export const setMaterialCategory = (category) => {
    return{
        type: 'SET_MATERIAL_CATEGORY',
        payload: category
    }
}

export const setMaterialName = (name) => {
    return{
        type: 'SET_MATERIAL_NAME',
        payload: name
    }
}

export const setMaterialSupplier = (supplier) => {
    return{
        type: 'SET_MATERIAL_SUPPLIER',
        payload: supplier
    }
}

export const setMaterialCount = (count) => {
    return{
        type: 'SET_MATERIAL_COUNT',
        payload: count
    }
}

export const setMaterialMeasure = (measure) => {
    return{
        type: 'SET_MATERIAL_MEASURE',
        payload: measure
    }
}

export const setMaterialValidation = (validation) => {
    return{
        type: 'SET_MATERIAL_VALIDATION',
        payload: validation
    }
}

export const clearAllMaterial = () => {
    return{
        type: 'CLEAR_ALL_MATERIAL'
    }
}

/*
export const setTaskNr = (nr) => {
    return{
        type: 'SET_TASK_NR',
        payload: nr
    }
}

export const setTaskId = (id) => {
    return{
        type: 'SET_TASK_ID',
        payload: id
    }
}

export const setTaskTeamId = (teamId) => {
    return{
        type: 'SET_TASK_TEAM_ID',
        payload: teamId
    }
}

export const setTaskUsername = (username) => {
    return{
        type: 'SET_TASK_USERNAME',
        payload: username
    }
}

export const setTaskName = (name) => {
    return{
        type: 'SET_TASK_NAME',
        payload: name
    }
}

export const setTaskStatus = (status) => {
    return{
        type: 'SET_TASK_STATUS',
        payload: status
    }
}

export const setTaskDescription = (description) => {
    return{
        type: 'SET_TASK_DESCRIPTION',
        payload: description
    }
}

export const setTaskValidation = (validation) => {
    return{
        type: 'SET_TASK_VALIDATION',
        payload: validation
    }
}

export const clearAllTask = () => {
    return{
        type: 'CLEAR_ALL_TASK',
    }
}*/

export const setTaskName = (name) => {
    return{
        type: 'SET_TASK_NAME',
        payload: name
    }
}

export const setTaskTeamName = (teamName) => {
    return{
        type: 'SET_TASK_TEAM_NAME',
        payload: teamName
    }
}

export const setTaskValidation = (validation) => {
    return{
        type: 'SET_TASK_VALIDATION',
        payload: validation
    }
}

export const clearAllTask = () => {
    return{
        type: 'CLEAR_ALL_TASK'
    }
}

export const setTaskTools = (tools) => {
    return{
        type: 'SET_TASK_TOOLS',
        payload: tools
    }
}

export const setTaskToolNr = (nr) => {
    return{
        type: 'SET_TASK_TOOL_NR',
        payload: nr
    }
}

export const setTaskToolTaskId = (taskId) => {
    return{
        type: 'SET_TASK_TOOL_TASK_ID',
        payload: taskId
    }
}

export const setTaskToolToolId = (toolId) => {
    return{
        type: 'SET_TASK_TOOL_TOOL_ID',
        payload: toolId
    }
}

export const setTaskToolToolName = (toolName) => {
    return{
        type: 'SET_TASK_TOOL_TOOL_NAME',
        payload: toolName
    }
}

export const setTaskToolValidation = (validation) => {
    return{
        type: 'SET_TASK_TOOL_VALIDATION',
        payload: validation
    }
}

export const clearAllTaskTool = () => {
    return{
        type: 'CLEAR_ALL_TASK_TOOL'
    }
}

export const setTaskMaterials = (materials) => {
    return{
        type: 'SET_TASK_MATERIALS',
        payload: materials
    }
}

export const setTaskMaterialNr = (nr) => {
    return{
        type: 'SET_TASK_MATERIAL_NR',
        payload: nr
    }
}

export const setTaskMaterialTaskId = (taskId) => {
    return{
        type: 'SET_TASK_MATERIAL_TASK_ID',
        payload: taskId
    }
}

export const setTaskMaterialMaterialId = (materialId) => {
    return{
        type: 'SET_TASK_MATERIAL_MATERIAL_ID',
        payload: materialId
    }
}

export const setTaskMaterialMaterialName = (materialName) => {
    return{
        type: 'SET_TASK_MATERIAL_MATERIAL_NAME',
        payload: materialName
    }
}

export const setTaskMaterialValidation = (validation) => {
    return{
        type: 'SET_TASK_MATERIAL_VALIDATION',
        payload: validation
    }
}

export const clearAllTaskMaterial = () => {
    return{
        type: 'CLEAR_ALL_TASK_MATERIAL',
    }
}