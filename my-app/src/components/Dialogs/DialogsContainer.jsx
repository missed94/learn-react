import React from "react";

import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()

                    let messageChange = (valueText) => {
                        /*let valueText = e.target.value;//получаем значение инпута*/
                        let action = onMessageChangeActionCreator(valueText);
                        store.dispatch(action);//запускаем метод dispatch в качестве аргумента тип action и значение из инпута в свойство newText
                    }

                    let sendMessage = () => {
                        let action = sendMessageActionCreator();
                        store.dispatch(action)
                    }
                    return (
                        <Dialogs
                            onMessageChange={messageChange}
                            onSendMessage={sendMessage}
                            dialogs={state.dialogsPage.dialogs}
                            messages={state.dialogsPage.messages}
                            newMessage={state.dialogsPage.newMessage}
                        />
                    )

                }

            }

        </StoreContext.Consumer>

    )
}

export default DialogsContainer;