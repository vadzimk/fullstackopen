const Notification = ({message, isError}) => {

    const msgStyle = {
        color: "green",
        border: "1px green solid",
        backgroundColor: "gray",
        borderRadius: 10,
        textAlign: "center",
        padding: 5,
        marginBottom: 10
    }

    const errStyle={
        ...msgStyle,
        color: "red",
        borderColor: "red",

    }

    if (!message)
        return null
    else
        return (
            <div style={isError ? errStyle : msgStyle}>
                {message}
            </div>
        )
}

export default Notification