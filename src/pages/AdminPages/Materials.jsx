import styles from './MenuPages.module.css'
import List from "../../components/List/List";
import Text from "../../components/Text/Text";
import DoubleLineText from "../../components/DoubleLineText/DoubleLineText";

const Materials = () => {

    const labels = ['Nr', 'Kategoria', 'Nazwa', 'Dostawca', 'Identyfikator', 'Ilość/miara', 'cena netto/brutto']
    const sizing = '0.2fr 0.8fr 1.6fr 0.8fr 0.8fr 0.6fr 1fr'
    const template = (nr, rowData) => {
        return [
            <Text content={nr} variant='bold'/>,
            <Text content={rowData.category}/>,
            <Text content={rowData.name}/>,
            <Text content={rowData.supplier}/>,
            <Text content={rowData.identity}/>,
            <DoubleLineText firstLine={rowData.count+' szt.'} secondLine={rowData.measure}/>,
            <DoubleLineText firstLine={rowData.price+' PLN'} secondLine={1.23*rowData.price+' PLN'}/>
        ]
    }
    const data = [{
        category: 'Stal',
        name: 'Stal nierdzewna 5mm - arkusz',
        supplier: 'Stal-Tech',
        count: 200,
        measure: 'akusz',
        identity: 'ATW-791-AU',
        price: 1000
    },{
        category: 'Stal',
        name: 'Stal nierdzewna 5mm - arkusz',
        supplier: 'Staller',
        count: 200,
        measure: 'akusz',
        identity: 'ATW-791-AU',
        price: 1000
    }]

    return(
        <div className={styles.MenuPages}>
            <List labels={labels} sizing={sizing} template={template} data={data}/>
        </div>
    )
}

export default Materials