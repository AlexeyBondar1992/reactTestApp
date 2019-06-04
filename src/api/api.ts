export const apiCall = (url: string) => fetch(url).then(users => users.json());
