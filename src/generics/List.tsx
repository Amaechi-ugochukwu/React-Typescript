
type ListProps <T> = {
    items : T[] ,
    onClick : (value: T ) => void
}

export default function List <T extends {id : number}>({items , onClick}: ListProps<T>){

    return(
        <div>
            <h2>List of Items </h2>
            {items.map((item , index) => {
             return(
                <div key ={item.id} onClick={() => onClick(item)}>
                    {item}
                </div>
             )
            }

            )}
        </div>
    )

}