export function saveUser(keyUserInfo) {
    const json = JSON.stringify(keyUserInfo);
    localStorage.setItem('keyUserInfo', json);
}

export function getUser() {
    const json = localStorage.getItem('keyUserInfo');
    if (!json) return null;
    const keyUserInfo = JSON.parse(json);
    return keyUserInfo; 
}