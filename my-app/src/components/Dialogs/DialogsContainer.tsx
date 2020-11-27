import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {dialogsActions} from "../../redux/reducers/dialogs-reducer";
import {AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {

    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            onSendMessage: dialogsActions.onSendMessage
        }),
    withAuthRedirect //hoc redirect'а (если не авторизован скидывает на логин)
)(Dialogs);