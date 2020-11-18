export type myPostsType = {
    id: number,
    message: string,
    likes: number,
}
export type contactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
export type photosType = {
    small: string
    large: string
}
export type profileType = {
    userId: number | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: contactsType,
    photos: photosType,
    aboutMe: string
}

export type usersType = {
    id: number,
    name: string,
    status: string,
    photos: photosType,
    followed: boolean
}

export type loginFormValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: null | string
}

