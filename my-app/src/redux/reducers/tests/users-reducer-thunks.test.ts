import {getFollow, getUnfollow, usersActions} from "../users-reducer";
import {responseType, ResultCodesEnum} from "../../../api/api";
import {followUnfollowAPI} from "../../../api/follow-unfollow-api";

jest.mock("../../../api/follow-unfollow-api") // фейковый followUnfollowAPI
const followUnfollowAPIMock = followUnfollowAPI as jest.Mocked<typeof followUnfollowAPI>

const dispatchMock = jest.fn() // фейковый dispatch
const getStateMock = jest.fn() // фейковый state

beforeEach(() => {
  dispatchMock.mockClear()
  getStateMock.mockClear()
  followUnfollowAPIMock.getFollow.mockClear()
  followUnfollowAPIMock.getUnfollow.mockClear()
})


const result: responseType = {
  resultCode: ResultCodesEnum.success,
  messages: [],
  data: {}
}

followUnfollowAPIMock.getFollow.mockReturnValue(Promise.resolve(result))
followUnfollowAPIMock.getUnfollow.mockReturnValue(Promise.resolve(result))

test("success follow thunk", async () => {
  const thunk = getFollow(1);

  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleFollowingInProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.follow(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleFollowingInProgress(false, 1))
});

test("success unfollow thunk", async () => {
  const thunk = getUnfollow(1);

  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  expect(dispatchMock).toHaveBeenNthCalledWith(1, usersActions.toggleFollowingInProgress(true, 1))
  expect(dispatchMock).toHaveBeenNthCalledWith(2, usersActions.unfollow(1))
  expect(dispatchMock).toHaveBeenNthCalledWith(3, usersActions.toggleFollowingInProgress(false, 1))
});