const Deneme = (props) => {
    
    console.log(props)

    const {params} = props;

    return(
        <div>
            Blog : {params.blogid}
        </div>
    )
}

export default Deneme;