import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {onMessageChange, onSendMessage} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {

    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
    }
}

export default compose(
    connect(mapStateToProps, {

            onMessageChange,
            onSendMessage
        }),

    withAuthRedirect //hoc redirect'а (если не авторизован скидывает на логин)
)(Dialogs);