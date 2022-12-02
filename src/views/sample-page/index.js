// material-ui

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { DatagridMuestra } from './DatagridMuestra';
import { FormBase } from './FormBase';


// ==============================|| SAMPLE PAGE ||============================== //



const SamplePage = () => (
    <MainCard title="Página simple">      
             <FormBase/>      
             <DatagridMuestra/> 
    </MainCard>
);

export default SamplePage;
