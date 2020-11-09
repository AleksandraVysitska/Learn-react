function PropsComponent(props) {
    return (
        <>
            <p>{props.data.name}</p>
            <p>{props.data.username}</p>
            <p>{props.data.email}</p>
        </>
    )
}

export default PropsComponent;