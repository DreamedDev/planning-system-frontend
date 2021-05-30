import styles from './MenuPages.module.css'
import List from "../../components/List/List";
import Text from "../../components/Text/Text";
import DoubleLineText from "../../components/DoubleLineText/DoubleLineText";

const Finance = () => {

    const labels = ['Nr', 'Nazwa transakcji', 'Identyfikator', 'Typ', 'Netto/brutto']
    const sizing = '0.5fr 1fr 1fr 1fr 1fr'
    const template = (nr, rowData) => {
        return [
            <Text content={nr} variant='bold'/>,
            <Text content={rowData.name}/>,
            <Text content={rowData.identity}/>,
            <Text content={rowData.type}/>,
            <DoubleLineText firstLine={rowData.price + ' PLN'} secondLine={rowData.vat * rowData.price / 100 + rowData.price + ' PLN'}/>,
        ]
    }
    const data = [{
        name: 'Reader - rozliczenie',
        identity: 'AH-2k-L',
        type: 'Sprzedaż',
        vat: 23,
        price: 38000
    },{
        name: 'Reader - rozliczenie',
        identity: 'AH-2k-L',
        type: 'Sprzedaż',
        vat: 23,
        price: 38000
    }]

    return(
        <div className={styles.MenuPages}>
            <List labels={labels} sizing={sizing} template={template} data={data}/>
        </div>
    )
}

export default Finance