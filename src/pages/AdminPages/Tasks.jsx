import styles from './MenuPages.module.css'
import List from "../../components/List/List";
import Text from "../../components/Text/Text";
import DoubleLineText from "../../components/DoubleLineText/DoubleLineText";
import {ExpandMore} from "@material-ui/icons";

const Tasks = () => {
    const labels = ['', 'Nazwa', 'Team/Brygadzista', 'Początek/Koniec', 'Wycena', 'Status', 'Opis']
    const sizing = '0.2fr 1.5fr 1fr 0.8fr 0.8fr 0.8fr 2fr'
    const template = (nr, rowData) => {
        return [
            <ExpandMore/>,
            <Text content={rowData.name}/>,
            <DoubleLineText firstLine={rowData.team} secondLine={rowData.leader}/>,
            <DoubleLineText firstLine={rowData.dateFrom} secondLine={rowData.dateTo}/>,
            <DoubleLineText firstLine={rowData.price+' PLN'} secondLine={1.23*rowData.price+' PLN'}/>,
            <Text content={rowData.state}/>,
            <Text content={rowData.description}/>,
        ]
    }
    const data = [{
        name: 'Księgarnia Reader - Frontend',
        team: 'Frontend Dev',
        leader: 'John Smith',
        dateFrom: '01.07.2021',
        dateTo: '01.09.2021',
        price: 25000,
        state: 'Realizowane',
        description: 'Stworzenie GUI księgarni internetowej dla firmy Reader sp. Z O. O.'
    },{
        name: 'Księgarnia Reader - Frontend',
        team: 'Frontend Dev',
        leader: 'John Smith',
        dateFrom: '01.07.2021',
        dateTo: '01.09.2021',
        price: 25000,
        state: 'Oczekujące',
        description: 'Stworzenie GUI księgarni internetowej dla firmy Reader sp. Z O. O.'
    }]

    return(
        <div className={styles.MenuPages}>
            <List labels={labels} sizing={sizing} template={template} data={data}/>
        </div>
    )
}

export default Tasks