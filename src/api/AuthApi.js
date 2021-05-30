const postRegistrationData = async (username, name, lastName, age, pessel, street, cityCode, city, phone, position, salary, password, companyName, adminKey) => {
    const RegistrationDto = {
        employer: {
            username: username,
            name: name,
            lastName: lastName,
            age: age,
            pessel: pessel,
            street: street,
            cityCode: cityCode,
            city: city,
            phone: phone,
            position: position,
            salary: salary,
            password:password
        },
        company: {
            name: companyName,
            adminKey: adminKey
        }
    }
    return await fetch('http://localhost:8080/api/auth/signup/create', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(RegistrationDto)
    }).then((response)=>{
        if(response.status === 200){
            return response.json()
        } else if(response.status === 403){
            throw "Forbidden"
        } else{
            throw "BadRequest"
        }
    })
}

const postLoginData = async (username, password) => {
    const employer = {
        username: username,
        password: password
    }
    return await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(employer)
    }).then((response)=>{
        if(response.status === 200){
            return response.json()
        } else if(response.status === 403){
            throw "Forbidden"
        } else{
            throw response
        }
    })
}

export {
    postRegistrationData,
    postLoginData
}