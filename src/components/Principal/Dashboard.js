import './Dashboard.css';

const Dashboard = () =>{
    return(
    <div className="dashboard">
        <header className='headerDashboard'>
            <div>Desplegalbe</div>
            <div>Real World App</div>
            <div>Otros</div>
        </header>
        <div className='bodyDashboard'>
            <div className='center'>
                <div className='imageThing'></div>
                <div className='personalDataForm'></div>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;