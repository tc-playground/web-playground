# Events

## Introduction

---

## Event Propagation

* If an `event` is not handled by a component, it is `propagated` up the parent-child hierarchy until a parent component handles it. This is standard `HTML`/`JavaScript` behaviour.

* `event propagation` can be stopped by calling `stopPropagation()` on the `event`. For example:

    ```javascript
    const modal = props => {
        return ReactDOM.createPortal(
            <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
                <div onClick={(e) => {e.stopPropagation()}} className="ui standard  modal visible active">
                    <div className="header">
                        Delete Stream
                    </div>
                    <div className="content">
                        Are you sure you want to delete this stream?
                    </div>
                    <div className='actions'>
                        <button className='ui primary button'>Delete</button>
                        <button className='ui button'>Cancel</button>
                    </div>
                </div>
            </div>,
            document.querySelector('#modal')
        );
    }
    ```
