import { HashLoader } from 'react-spinners'

const Spinner = ({ loading }) => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <HashLoader
                color='greenYellow'
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Spinner
