import styles from './List.module.css'

const Row = () => {
    return(
        <div className={styles.Row}>
            Row
        </div>
    )
}

const List = ({labels, sizing, data, template}) => {

    const gridLayout = {
        display: 'grid',
        alignContent: "start",
        gridTemplateColumns: sizing,
        gap: "25px"
    }

    return(
        <div className={styles.List}>
            <div style={gridLayout} className={styles.Labels}>
                {labels.map((label)=>(
                    <p>{label}</p>
                ))}
            </div>
            {data.map((rowData, index)=>(
                <div style={gridLayout} className={styles.Row}>
                    {template(index+1, rowData)}
                </div>
            ))}
        </div>
    )
}

export default List