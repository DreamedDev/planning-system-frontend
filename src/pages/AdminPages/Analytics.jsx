import styles from './MenuPages.module.css'
import List from "../../components/List/List";
import Text from "../../components/Text/Text";
import DoubleLineText from "../../components/DoubleLineText/DoubleLineText";

const Analytics = () => {

    const labels = ['Nr', 'Imię i Nazwisko', 'Wiek/Pesel', 'Adres', 'Kontakt', 'Stanowisko', 'Wynagrodzenie']
    const sizing = '0.5fr 1fr 1fr 1fr 1fr 1fr 1fr'
    const template = (nr, rowData) => {
        return [
            <Text content={nr} variant='bold'/>,
            <Text content={rowData.name+' '+rowData.lastName}/>,
            <DoubleLineText firstLine={rowData.age+' lat'} secondLine={rowData.pessel}/>,
            <DoubleLineText firstLine={rowData.street} secondLine={rowData.city}/>,
            <Text content={rowData.contact}/>,
            <Text content={rowData.position}/>,
            <Text content={rowData.salary+' PLN'} variant='special'/>,
        ]
    }
    const data = [{
        name: 'Jan',
        lastName: 'Kowalski',
        age: 22,
        pessel: '83100319211',
        position: 'Programista Java',
        street: 'Grow Strteet 12',
        city: '11-111 Earth Planet',
        contact: '735-167-327',
        salary: 5000
    },{
        name: 'John',
        lastName: 'Smith',
        age: 22,
        pessel: '83100319211',
        position: 'Programista Java',
        street: 'Grow Strteet 12',
        city: '11-111 Earth Planet',
        contact: '735-167-327',
        salary: 5000
    }]

    return(
        <div className={styles.MenuPages}>
            <List labels={labels} sizing={sizing} template={template} data={data}/>
        </div>
    )
}

export default Analytics