import styles from './MenuPages.module.css'
import List from "../../components/List/List";
import Text from "../../components/Text/Text";
import {ExpandMore} from "@material-ui/icons";

const Teams = () => {

    const labels = ['', 'Nazwa', 'Placówka', 'Brygadzista', 'Kontakt']
    const sizing = '0.2fr 1fr 1fr 1fr 1fr'
    const template = (nr, rowData) => {
        return [
            <ExpandMore/>,
            <Text content={rowData.name}/>,
            <Text content={rowData.place}/>,
            <Text content={rowData.leader}/>,
            <Text content={rowData.contact} variant='bold'/>,
        ]
    }
    const data = [{
        name: 'Backend Dev',
        place: 'Kraków',
        leader: 'Jan Kowalski',
        contact: '735-167-327'
    },{
        name: 'Frontend Dev',
        place: 'Warszawa',
        leader: 'John Smith',
        contact: '735-167-327'
    }]

    return(
        <div className={styles.MenuPages}>
            <List labels={labels} sizing={sizing} template={template} data={data}/>
        </div>
    )
}

export default Teams