

type friendsType = {
    id: number,
    name: string
}


let initialState = {
    friends: [
        {id: 1, name: "Danil"},
        {id: 2, name: "Artem"},
        {id: 3, name: "Dima"},
        {id: 4, name: "Igor"},
    ] as Array<friendsType>
};

type initialStateType = typeof initialState

 const sidebarReducer = (state = initialState, action:any) => {
    return state;
}

 export default sidebarReducer