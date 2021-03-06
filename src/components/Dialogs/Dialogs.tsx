import React, {ChangeEvent} from 'react';
import './Dialogs.scss'
import '../../App.scss'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messages} from "./Messages/Messages";
import {DialogsPropsType} from "./DialogsContainer";




const Dialogs = ({dialogs, messages, newDialogMessage, onChangeMessage, addMessage}: DialogsPropsType) => {

  /*=================Отрисовка элементов диалога и сообщений=================*/
  let dialogElement = dialogs.map(d => <DialogsItem id={d.id} name={d.name}/>)
  let messageElement = messages.map(m => <Messages id={m.id} message={m.message}/>)

  /*=================Добавление сообещния=================*/
  let onAddMessage = () => {
    addMessage()
  }
  /*=================Изменение данных в текстэрии=================*/
  const messageDialogChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.currentTarget.value;
    onChangeMessage(value)
  }

  return (
    <section className="dialogs section">
      <div className="dialogs__title section__text">Dialogs</div>
      <div className="dialogs__wrapper">
        <div className="dialogs__items">
          {dialogElement}
        </div>
        <div className="dialogs__messages">
          {messageElement}
          <div className='dialogs__form '>
            <textarea className='dialogs__area' onChange={messageDialogChangeHandler}
                      value={newDialogMessage}/>
            <button className='dialogs__btn' onClick={onAddMessage}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dialogs;