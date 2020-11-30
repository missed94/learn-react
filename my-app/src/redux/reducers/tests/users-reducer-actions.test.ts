import usersReducer, {initialStateType, usersActions} from "../users-reducer";

let state: initialStateType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                name: "Alex",
                photos: {
                    large: null,
                    small: null,
                },
                status: "hello",
                followed: false
            },
            {
                id: 1,
                name: "Sergey",
                photos: {
                    large: null,
                    small: null,
                },
                status: "HRY?",
                followed: false
            },
            {
                id: 2,
                name: "Dmitriy",
                photos: {
                    large: null,
                    small: null,
                },
                status: "BB",
                followed: true
            },
            {
                id: 3,
                name: "Oleg",
                photos: {
                    large: null,
                    small: null,
                },
                status: "PVP",
                followed: true
            },
        ],
        portionSize: 10,
        pageSize: 30,
        totalItemsCount: 3,
        currentPage: 1,
        followingInProgress: [],
        isFetching: false,
    }
})


test("followed should be true for users[i]", () => {
    let newState = usersReducer(state, usersActions.follow(1))

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
})

test("followed should be false for users[i]", () => {
    let newState = usersReducer(state, usersActions.unfollow(2))

    expect(newState.users[3].followed).toBeTruthy();
    expect(newState.users[2].followed).toBeFalsy();
})