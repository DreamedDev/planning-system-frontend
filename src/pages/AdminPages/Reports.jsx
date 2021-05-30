import styles from './MenuPages.module.css'
import List from "../../components/List/List";
import Text from "../../components/Text/Text";
import DoubleLineText from "../../components/DoubleLineText/DoubleLineText";

const Reports = () => {

    const labels = ['Nr', 'Identyfikator', 'Zadanie', 'Team', 'Rozpoczęcie/zakończenie', 'Szacowane/rzeczywiste']
    const sizing = '0.2fr 1fr 1fr 1fr 1fr 1fr'
    const template = (nr, rowData) => {
        return [
            <Text content={nr} variant='bold'/>,
            <Text content={rowData.identity}/>,
            <DoubleLineText firstLine={rowData.taskName} secondLine={rowData.taskIdentity}/>,
            <DoubleLineText firstLine={rowData.teamName} secondLine={rowData.teamLeader}/>,
            <DoubleLineText firstLine={rowData.dateFrom} secondLine={rowData.dateTo}/>,
            <DoubleLineText firstLine={rowData.estimatePrice+' PLN'} secondLine={rowData.price+' PLN'}/>,
        ]
    }
    const data = [{
        identity: 'ASK-ZS-744-31',
        taskName: 'Księgarnia Reader - Frontend',
        taskIdentity: 'WS-32',
        teamName: 'Frontend Dev',
        teamLeader: 'John Smith',
        dateFrom: '01.07.2021',
        dateTo: '01.08.09',
        estimatePrice: 25000,
        price: 18000
    },{
        identity: 'ASK-ZS-744-31',
        taskName: 'Księgarnia Reader - Frontend',
        taskIdentity: 'WS-32',
        teamName: 'Frontend Dev',
        teamLeader: 'John Smith',
        dateFrom: '01.07.2021',
        dateTo: '01.08.09',
        estimatePrice: 25000,
        price: 18000
    }]

    return(
        <div className={styles.MenuPages}>
            <List labels={labels} sizing={sizing} template={template} data={data}/>
        </div>
    )
}

export default Reports