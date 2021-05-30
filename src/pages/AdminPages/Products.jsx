import styles from './MenuPages.module.css'
import List from "../../components/List/List";
import Text from "../../components/Text/Text";
import DoubleLineText from "../../components/DoubleLineText/DoubleLineText";

const Products = () => {

    const labels = ['Nr', 'Kategoria', 'Nazwa', 'PKWiU', 'Vat', 'Miara', 'Cena netto/brutto']
    const sizing = '0.2fr 1fr 1fr 0.6fr 0.6fr 0.6fr 0.8fr'
    const template = (nr, rowData) => {
        return [
            <Text content={nr} variant='bold'/>,
            <Text content={rowData.category}/>,
            <Text content={rowData.name}/>,
            <Text content={rowData.pkwiu}/>,
            <Text content={rowData.vat + ' %'}/>,
            <Text content={rowData.measure}/>,
            <DoubleLineText firstLine={rowData.price + ' PLN'} secondLine={rowData.vat * rowData.price / 100 + ' PLN'}/>,
        ]
    }
    const data = [{
        category: 'Instalacje',
        name: 'Instalacja wodna',
        pkwiu: '11.11.1',
        vat: 23,
        measure: 'metr',
        price: 1200
    },{
        category: 'Instalacje',
        name: 'Instalacja wodna',
        pkwiu: '11.11.1',
        vat: 23,
        measure: 'metr',
        price: 1200
    }]

    return(
        <div className={styles.MenuPages}>
            <List labels={labels} sizing={sizing} template={template} data={data}/>
        </div>
    )
}

export default Products