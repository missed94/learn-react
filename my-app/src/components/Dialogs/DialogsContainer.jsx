import React from "react";
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (valueText) => {
            let action = onMessageChangeActionCreator(valueText);
            dispatch(action);//запускаем метод dispatch в качестве аргумента тип action и значение из инпута в свойство newText
        },
        onSendMessage: () => {
            let action = sendMessageActionCreator();
            dispatch(action)
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;