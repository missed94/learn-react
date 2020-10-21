import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {onSendMessage} from "../../redux/reducers/dialogs-reducer";


let mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            onSendMessage
        }),
    withAuthRedirect //hoc redirect'а (если не авторизован скидывает на логин)
)(Dialogs);