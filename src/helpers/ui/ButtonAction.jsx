import { UncontrolledTooltip } from "reactstrap"
import { Link } from "react-router-dom"

const ButtonAction = (props) => {
    let id = props.id
    let enable = props.enable ?? true
    let hidden = props.hidden ?? false
    let tooltip = props.tooltip ?? ''
    let text = props.text
    if(hidden) {
        return (<></>)
    } else {
        return (
            <>
                {
                    enable ?
                        <span>
                            {
                                props.link ?
                                    <Link
                                        className={"btn btn-"+props.color+" btn-sm"}
                                        id={id}
                                        style={{
                                            padding: '5px 5px',
                                            margin: '1px'
                                        }}
                                        to={props.link}
                                    >
                                        {text}
                                    </Link>
                                :
                                <button
                                    className={"btn btn-"+props.color+" btn-sm"}
                                    id={id}
                                    onClick={props.onClick}
                                    style={{
                                        padding: '5px 5px',
                                        margin: '1px'
                                    }}>
                                    {text}
                                </button>
                            }
                            {
                                tooltip !== '' ?
                                <UncontrolledTooltip placement='bottom' target={id}>
                                    {tooltip}
                                </UncontrolledTooltip>
                                : <></>
                            }
                            
                        </span>
                    :
                        <button
                            className="btn btn-soft-secondary btn-sm" disabled={true}
                            style={{
                                padding: '5px 5px',
                                margin: '1px',
                                opacity: 0.4
                            }}>
                            {text}
                        </button>
                }
            </>
        )
    }
}

export default ButtonAction