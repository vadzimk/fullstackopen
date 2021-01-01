const Notification = ({message}) => {

    const msgStyle = {
        color: "green",
        border: "1px green solid",
        backgroundColor: "gray",
        borderRadius: 10,
        textAlign: "center",
        padding: 5,
        marginBottom: 10
    }


    if (!message)
        return null
    else
        return (
            <div style={msgStyle}>
                {message}
            </div>
        )
}

export default Notification