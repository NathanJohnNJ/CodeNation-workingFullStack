export const writeCookie = (key, value, days) =>  {
    let date = new Date()
        days = days || 365
        date.setDate(date.getDate() + days) // formate the expiry date correctly
    
    let cookie = document.cookie = key + "=" + value + "; expires=" + date.toGMTString() + "; path=/" 

    return cookie
}

export const getCookie = (cookieName) => {
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`)  // using regular expression to find the pattern of the cookieName
    console.log("********* Regular expression = ", re)

    try {
        let cookie = document.cookie.match(re)[0]
        return cookie

    } catch (error) {
        console.log("Cookie not found")
        return false

    }
}