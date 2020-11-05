export const setBLang = (lang) => {
    return {
        type: "CHANGE_BLANG",
        payload: lang
    }
}

export const setLang = (lang) => {
    console.log("in action : " + lang);
    return {
        type: "CHANGE_LANG",
        payload: lang
    }
}