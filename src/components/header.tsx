import imageBrazil from '../brazil.png';
import english from '../english-language.png';

const Languages = ({ changeToPt, changeToEn }: any) => {
    return (
        <div style={{width: 'fit-content', marginLeft: 'auto', marginTop: '10px', paddingRight: '50px'}}>
            <div style={{width: '70px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span style={{cursor: 'pointer'}} onClick={() => changeToPt()}><img src={imageBrazil} alt="PT"/></span>
                <span style={{cursor: 'pointer'}} onClick={() => changeToEn()}><img src={english} alt="EN"/></span>
            </div>
        </div>
    )
}

export default Languages;