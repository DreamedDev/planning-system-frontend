import styles from './List.module.css'

const List = ({labels, sizing, data, template, onClick, active, cursor='auto'}) => {

    const gridLayout = {
        display: 'grid',
        alignContent: "start",
        gridTemplateColumns: sizing,
        gap: "25px",
        cursor: cursor
    }

    return(
        <div className={styles.List}>
            <div style={gridLayout} className={styles.Labels}>
                {labels.map((label)=>(
                    <p>{label}</p>
                ))}
            </div>
            {data.map((rowData, index)=>(
                <div style={gridLayout} className={active===index ? styles.ActiveRow : styles.Row} onClick={()=>onClick(index)}>
                    {template(index+1, rowData)}
                </div>
            ))}
        </div>
    )
}

export default List